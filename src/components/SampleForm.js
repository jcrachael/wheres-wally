export function SampleForm({ submitHandler, dataRef }) {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={dataRef} />
      <button type="submit">Save</button>
    </form>
  );
}
