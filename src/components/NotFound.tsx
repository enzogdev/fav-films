import { Card } from "primereact/card";

interface NotFoundProps {
  searchTerm: string;
}

export const NotFound = ({ searchTerm }: NotFoundProps) => {
  return (
    <div className="notfound-container">
      <Card title="No Results Found" className="p-shadow-4">
        <div>
          <p>Sorry, we couldn't find any results for "{searchTerm}".</p>
        </div>
      </Card>
    </div>
  );
};
