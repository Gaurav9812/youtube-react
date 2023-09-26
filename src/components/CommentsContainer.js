import React from "react";
import { commentsData } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-3 rounded-xl m-3">
      <img
        className="w-12 h-12"
        alt="user"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAbFBMVEX///8rLzIcISWGiIkiJyonKy4AAAAXHSFaXF4IERdER0kkKCy5ursTGh7k5eWhoqPt7e0ACA+ys7RUVlj29vaZmptzdXYPFhuAgYPKysusrK49QUMAAAbX19dhY2TP0NBLTlAzNzqPkZJqbG554O45AAADfElEQVR4nO2a2XajMAxAY2MDZjFLKAQSQiD//48DTTtZCgQZmZkz4/vYPPQeW5KF7N3OYDAYDAaDYUPipuosy+qqJv4zAsHheDoJh1LqiNPpeAi2FqgtEVJO7nAaCqve0EDm3CE/cXgut1KIGB0xGKAs2sRAemLCYEB4GyxFSdmMAiGMlroVgqdIHINTzRmSFm8MBopUp0JpL1AgxNa4HZK824iv7SD6AvM8lZOv0LMuhWguKZ8RmuqEXLoKnyuhZzcskIOlQyFOAAqEJDqO827smJrG6fAVMm9ZXn7DvQzdoVmeFDdEg+5gwbai3wz8qLzAtqLfjAu2QtwCFQhpsTOjme8axmDYAREsObSfKbD7iEWNw4sDdhsRKThgn1tRCHYI/0WHvyEmA4V1wHaofbCDj/35GbfgWo1eJ3d76EL4e2yF3Qc0IMIPdIca7IA/jcj2wD5qj99HQas1eqUeyCCtfd/ca1iGPioh3ZyDH5ED2cIv3gFOtCxD30MAvje1jSAOS/MzPOhS2MWXZV0lu2ic28pkSUjwROtsrqbvjw2fap7X1u27MkFb7SNj6c1L0C2GpFl+mg4Kfso1FYYXSm8iNHniaR/SfpNFx/BnbPrhMdpmEW7EqSccdl8NzhzhpZvf5sgqPwo7EUIktjjm1WZXF89kcV2maVrW8ZZ7YPhNbfnW1N7L/jf9F2vN1Xe4Q67pTw2ZXkn/G7viD+Se/s25uFVqJti5C+4eMujO/d9u1To868uRzLIf+gefJrbNPNd1PWbbyeOByuyDpkQpyUhTy5nPRgo3JTqKdtYVkI8cXnToS5G54FmxiywhBXw+SQvU0Gw4dPow4PuIWdoQ+BTmU4KgSdShyioMcAdpO2JHVWG4eEbpKbI9PBzvMJTsOMAnk48UCJ991TqFXqJaqxDDZ6OvhGtDIodNX8ag+TqFhY8N5ln3FCED36SNwS9rciNdHw0D4ZqpjKdWo1/xPXWFAHqvOoWjfo3grqmQjzDldyESIylu2KpnF2goOo/qyBQ6JZ+DKx5dcu1J8YhiX1dBu9g5ErXMuGJlxQC7qihAH5/Mo/Y0RbaICoS0KgFR4pwV3zgqh6fC7fIcSjfPiBVqQKlKgR8CvXFQeSaE0MU9otTRnTHLg+LRiXZwfzm4xsE4rHTYFxSTQuVJxoeFi54LcIPBYDAYDP8nvwCqqzMw6CLfPAAAAABJRU5ErkJggg=="
      />
      <div className="px-4">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="font-bold text-xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
