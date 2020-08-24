// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([
    {
      name: "user_1",
      age: "30"
    },
    {
      name: "user_2",
      age: "20"
    },
    {
      name: "user_3",
      age: "29"
    }
  ])
}
