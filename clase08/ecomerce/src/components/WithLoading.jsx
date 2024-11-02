import {useState, useEffect} from "react";

const withLoading = (WrappedComponent) => {
  
    return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
