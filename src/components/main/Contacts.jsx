import React from 'react';
import GlassCard from '../shared/GlassCard';

const Contacts = () => {
    return (
        <div>
            <section className="py-20 flex justify-center text-white">
      <div className="w-full max-w-md">
        <GlassCard>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

          <form className="flex flex-col gap-4">
            <input className="p-3 bg-white/10 rounded border border-white/20" placeholder="Name" />
            <input className="p-3 bg-white/10 rounded border border-white/20" placeholder="Email" />
            <textarea className="p-3 bg-white/10 rounded border border-white/20" placeholder="Message"></textarea>

            <button className="bg-white/20 hover:bg-white/30 transition p-3 rounded">
              Send Message
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
        </div>
    );
};

export default Contacts;