import { data } from "autoprefixer";
import React from "react";
import Card from "../Card/Card";

class CardGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchData()
      .then((res) => {
        this.setState({ data: res, loading: false });
        return res;
      })
      .catch((error) => console.log(error));
  }
  fetchData = async () => {
    let data = "";
    data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));
    return data;
  };
  componentWillUnmount() {}
  render() {
    const { data } = this.state;
    return (
      <div className="mt-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-20 gap-10">
          {this.state.loading && (
            <h1 className="animate-pulse text-8xl">Loading...</h1>
          )}
          {data && data.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    );
  }
}

export default CardGrid;
