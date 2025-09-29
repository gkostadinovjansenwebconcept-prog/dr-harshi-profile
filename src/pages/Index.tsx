import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Medical Professional Directory</h1>
        <p className="text-xl text-muted-foreground mb-8">Discover leading medical experts and professionals</p>
        <a href="/dr-harshi-dhingra.html" target="_blank" rel="noopener noreferrer">
          <Button variant="medical" size="lg">
            View Dr. Harshi Dhingra's Profile (HTML)
          </Button>
        </a>
        <Link to="/dr-harshi-dhingra">
          <Button variant="outline" size="lg">
            View React Version
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
