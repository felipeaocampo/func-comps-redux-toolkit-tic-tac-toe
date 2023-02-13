import Box from "./Box";

const Grid = () => {
  const row1 = [`A`, `B`, `C`];
  const row2 = [`D`, `E`, `F`];
  const row3 = [`G`, `H`, `I`];

  const renderedRow1 = row1.map((id) => {
    return <Box boxId={id} key={`R1X${id}`} />;
  });
  const renderedRow2 = row2.map((id) => {
    return <Box boxId={id} key={`R2X${id}`} />;
  });
  const renderedRow3 = row3.map((id) => {
    return <Box boxId={id} key={`R3X${id}`} />;
  });

  return (
    <div className="grid">
      {renderedRow1}
      {renderedRow2}
      {renderedRow3}
    </div>
  );
};

export default Grid;
