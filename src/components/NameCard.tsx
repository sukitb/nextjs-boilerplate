export interface NameCardProps {
  firstName: string;
  lastName: string;
}

export default function NameCard({ firstName, lastName }: NameCardProps) {
  function capitalizeFLetter(string: string) {
    if (!string) return "";
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div
        className="p-4"
        style={{ backgroundColor: "grey", maxWidth: "200px" }}
      >
        <p className="text-center">
          {capitalizeFLetter(firstName) + " " + capitalizeFLetter(lastName)}
        </p>
      </div>
    </>
  );
}
