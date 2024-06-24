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
        className="px-8"
        style={{ backgroundColor: "grey", maxWidth: "200px" }}
      >
        <p>
          {capitalizeFLetter(firstName) + " " + capitalizeFLetter(lastName)}
        </p>
      </div>
    </>
  );
}
