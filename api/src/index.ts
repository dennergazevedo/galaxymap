import app from './app';

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening in ${8080}`);
})