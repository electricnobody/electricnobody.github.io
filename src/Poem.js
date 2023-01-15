function Poem(props) {
  return (
    <>
      <h1 className="text-center">{props.title.replace(/_/g, "")}</h1>
      <pre>{props.poem}</pre>
    </>
  )
}

export default Poem;