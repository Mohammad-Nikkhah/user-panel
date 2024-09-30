const UsersSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="h-6 bg-gray-300 rounded"></div>
      ))}
    </div>
  );
};

export default UsersSkeleton;
