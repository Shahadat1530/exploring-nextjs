import { getDictionary } from "../dictionaries/dictionaries";

export default async function Contact({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <div className='mt-10 text-center min-h-screen'>
      <h3 className='text-3xl text-red-500'>Home</h3>
      <p className="mt-5">
        This is the {dict.contact} Page
      </p>
    </div>
  );
}
