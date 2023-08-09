import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfiniteScrollPage() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const resetData = () => {
    setDataSource(Array.from({ length: 20 }));
    setHasMore(true);
  };
  const handleReset = () => {
    resetData();
    window.scrollTo(0, 0);
  };
  const addMoreData = () => {
    setDataSource((prevDataSource) =>
    prevDataSource.concat(Array.from({ length: 20 }))
  );
    setHasMore(true);
  }

  const fetchMoreData = () => {
    if (dataSource.length < 100) {
      setTimeout(() => {
        setDataSource((prevDataSource) =>
          prevDataSource.concat(Array.from({ length: 20 }))
        );
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">
        Infinite Scroll React
      </h1>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-center">Loading...</p>}
      >
        {dataSource.map((item, index) => {
          return (
            <div
              key={index}
              className="border-solid border-2 border-teal-500 m-3 p-2 w-[50%] text-center mx-auto"
            >
              This is index #{index + 1} inside Infinite Scroll
            </div>
          );
        })}
      </InfiniteScroll>
      <div className="text-center my-5">
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
        >
          Reset
        </button>
        <button
        onClick={addMoreData}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Add More
        </button>
      </div>
    </div>
  );
}
