import { useState, useEffect } from "react";
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    const loadData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    useEffect(() => {
      loadData();
    }, []);
    // loadData();
    return (
      <div>
        {isLoading ? (
          <p>Đang tải dữ liệu...</p>
        ) : (
          <WrappedComponent {...props} />
        )}
      </div>
    );
  };
}

export default withLoading;
