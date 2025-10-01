import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    village: "Le Village",
    culture: "Culture & Patrimoine",
    tourisme: "Tourisme",
    actualites: "Actualités",
    contact: "Contact",
    services: "E-Services",
    environnement: "Environnement",
  };

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Accueil"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Accueil</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const label = breadcrumbNameMap[value] || value;

            return (
              <li key={to} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
