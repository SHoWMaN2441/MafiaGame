import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  title: string;
  subtitle?: string;
  type?: "win" | "lose" | "info";
  onClose: () => void;
  actionText?: string;
};

export default function GameModal({
  open,
  title,
  subtitle,
  type = "info",
  onClose,
  actionText = "OK",
}: Props) {
  const badge =
    type === "win"
      ? "bg-emerald-500 text-slate-900"
      : type === "lose"
      ? "bg-rose-500 text-slate-900"
      : "bg-white text-slate-900";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
            initial={{ scale: 0.85, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${badge}`}>
                {type.toUpperCase()}
              </span>
              <button onClick={onClose} className="text-slate-300 hover:text-white text-sm">
                ✕
              </button>
            </div>

            {/* small animated banner */}
            <motion.div
              className="mt-4 h-16 rounded-2xl border border-slate-700 bg-slate-800 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="absolute -left-10 top-4 h-8 w-28 rounded-full bg-white/10"
                animate={{ x: [0, 520] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-20 top-8 h-6 w-20 rounded-full bg-white/10"
                animate={{ x: [0, 520] }}
                transition={{ duration: 3.2, repeat: Infinity }}
              />
            </motion.div>

            <h3 className="mt-4 text-2xl font-bold">{title}</h3>
            {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-2xl bg-white text-slate-900 font-semibold py-3 hover:opacity-95"
            >
              {actionText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
