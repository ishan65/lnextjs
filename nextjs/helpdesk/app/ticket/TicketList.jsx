import Link from "next/link";
async function getTickets() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export const TicketList = async () => {
  const ticket = await getTickets();
  return (
    <>
      {ticket.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/ticket/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {ticket.length == 0 && (
        <p className="text-center">There is no open ticket</p>
      )}
    </>
  );
};
