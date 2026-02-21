export default function Home() {
  return (
    <div style={{ 
      padding: 40,
      backgroundColor: "black",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "white" }}>測試圖片</h1>

      <img
        src="/yami.png"
        alt="Yami"
        style={{
          width: 400,
          border: "3px solid red"
        }}
      />
    </div>
  );
}