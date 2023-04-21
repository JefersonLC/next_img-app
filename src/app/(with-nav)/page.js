import Card from '@/components/Card';

export default async function HomePage() {
  const response = await fetch('http://localhost:8000/api/images', {
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();

  return (
    <div className='main-div'>
      {data.map((image) => (
        <Card key={image.id} data={image} />
      ))}
    </div>
  );
}
