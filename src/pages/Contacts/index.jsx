import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TextField } from "../../components/TextField";

export const ContactsPage = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || contact === "") {
      setError("Por favor, preencha todos os campos.");
      setMessage("");
      return;
    }

    console.log("Nome:", name);
    console.log("Contato:", contact);

    setError("");
    setMessage("Mensagem enviada com sucesso!");
    setName("");
    setContact("");
  }

  return (
    <main className="min-h-dvh bg-gray-900 text-center py-10 px-4">
      <Header />

      <div className="max-w-3xl mx-auto mt-8 bg-gray-800 rounded-lg p-8 text-left text-white">
        <h1 className="text-4xl font-bold mb-6">Entre em contato</h1>
        <p className="mb-8 text-gray-300">
          Preencha seu nome e um meio de contato, e retornaremos em breve.
        </p>

        {error && <p className="mb-4 text-red-500 font-semibold">{error}</p>}
        {message && <p className="mb-4 text-green-500 font-semibold">{message}</p>}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome completo"
            placeholder="Seu nome"
            name="name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Contato"
            placeholder="E-mail ou telefone"
            name="contact"
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>

      <Footer />
    </main>
  );
};
