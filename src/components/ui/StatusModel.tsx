import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import { Button } from "./Button";

const statusConfig: any = {
  success: {
    icon: CheckCircle,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    title: "Success!",
  },
  error: {
    icon: XCircle,
    iconColor: "text-red-400",
    bgColor: "bg-red-500/20",
    title: "Something Went Wrong",
  },
  warning: {
    icon: AlertTriangle,
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    title: "Warning",
  },
  info: {
    icon: Info,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
    title: "Information",
  },
};

const StatusModal = ({
  type = "success",
  title,
  message,
  buttonText = "Done",
  onClose,
}: any) => {
  const config = statusConfig[type] || statusConfig.success;
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
        className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${config.bgColor}`}
      >
        <Icon className={`h-10 w-10 ${config.iconColor}`} />
      </motion.div>

      <h3 className="text-2xl font-bold text-white">{title || config.title}</h3>

      {message && <p className="mt-2 text-zinc-400">{message}</p>}

      <Button className="mt-6" onClick={onClose}>
        {buttonText}
      </Button>
    </motion.div>
  );
};

export default StatusModal;
