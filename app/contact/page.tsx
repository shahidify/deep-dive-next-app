import ButtonCustom from './ButtonCustom';

export default async function Contact() {
  console.log('Contact: Is this Server or Client component ?');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts);

  return (
    <div>
      <ButtonCustom />
    </div>
  );
}
