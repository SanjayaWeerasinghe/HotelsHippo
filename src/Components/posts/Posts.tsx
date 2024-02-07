import React from "react";
import Post from "../post/Post";
import "./posts.css";

const Posts: React.FC = () => {
  return (
    <div className="posts">
      <Post img="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu" />
      <Post img="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu" />
      <Post img="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu" />
      <Post img="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu" />
      <Post img="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu" />
    </div>
  );
};

export default Posts;
