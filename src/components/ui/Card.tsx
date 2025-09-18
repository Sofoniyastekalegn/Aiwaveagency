// components/ui/Card.tsx
export function Card({ title, value }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold text-gray-500 mb-2">{title}</h3>
        <p className="text-4xl font-bold text-gray-900">{value}</p>
      </div>
    );
  }
  