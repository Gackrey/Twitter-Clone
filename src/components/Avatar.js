export function Avatar({
  pix,
  top = "0px",
  src = "https://pbs.twimg.com/profile_images/1347842128169160704/uPF5ukjO_bigger.jpg"
}) {
  return (
    <img
      style={{
        width: pix,
        height: pix,
        borderRadius: "50%",
        position: "relative",
        top: top
      }}
      src={src}
      alt=""
    />
  );
}
