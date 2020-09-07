// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([
    {
      title: "tile for note 1",
      content: "note content here",
    },
    {
      title: "tile for note 2",
      content: "note content here",
    },
    {
      title: "tile for note 3",
      content: "note content here",
    },
  ])
}
