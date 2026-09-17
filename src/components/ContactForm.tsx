"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    );
    const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus(
      "Es öffnet sich Ihr E-Mail-Programm (Mailto-Fallback). Alternativ schreiben Sie direkt an die angezeigte Adresse.",
    );
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input mt-1.5"
          placeholder="Ihr Name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-foreground"
        >
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input mt-1.5"
          placeholder="ihre.email@beispiel.de"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-foreground"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input mt-1.5"
          placeholder="Ihre Nachricht …"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Nachricht schreiben
      </button>
      {status ? (
        <p className="text-sm text-muted" role="status">
          {status}
        </p>
      ) : null}
      <p className="text-sm text-muted">
        Fallback:{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-accent hover:underline"
        >
          {site.email}
        </a>
      </p>
    </form>
  );
}
