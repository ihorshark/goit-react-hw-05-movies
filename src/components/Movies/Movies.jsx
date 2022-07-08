// import { useState, useEffect } from 'react';
import { Form } from './Form';

export default function Movies() {
  //   const [searchParams, setSearchParams] = useSearchParams();
  function handleSubmit() {}
  return (
    <section>
      <Form onFormSubmit={handleSubmit} />
    </section>
  );
}
