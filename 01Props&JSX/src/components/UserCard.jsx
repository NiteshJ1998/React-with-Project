const UserCard = ({ name, age }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md m-2 w-60 text-center">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
};

export default UserCard;
