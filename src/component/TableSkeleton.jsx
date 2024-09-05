const TableSkeleton = ({ rows, columns }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300 animate-pulse">
      <thead>
        <tr>
          {Array(columns)
            .fill(0)
            .map((_, index) => (
              <th
                key={index}
                className="py-2 px-4 border bg-gray-200 animate-pulse"
              >
                &nbsp;
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {Array(rows)
          .fill(0)
          .map((_, rowIndex) => (
            <tr key={rowIndex} className="animate-pulse">
              {Array(columns)
                .fill(0)
                .map((_, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border bg-gray-100">
                    &nbsp;
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};


export default TableSkeleton;