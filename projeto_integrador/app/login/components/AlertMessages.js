import React from "react";

const alertStyles = {
  success: {
    bg: "bg-green-100 dark:bg-green-900",
    border: "border-green-500 dark:border-green-700",
    text: "text-green-900 dark:text-green-100",
    icon: "text-green-600",
    message: "Success - Tudo ocorreu perfeitamente!",
  },
  info: {
    bg: "bg-blue-100 dark:bg-blue-900",
    border: "border-blue-500 dark:border-blue-700",
    text: "text-blue-900 dark:text-blue-100",
    icon: "text-blue-600",
    message: "Info - Aqui vai uma informação importante.",
  },
  warning: {
    bg: "bg-yellow-100 dark:bg-yellow-900",
    border: "border-yellow-500 dark:border-yellow-700",
    text: "text-yellow-900 dark:text-yellow-100",
    icon: "text-yellow-600",
    message: "Warning - Cuidado com o próximo passo.",
  },
  error: {
    bg: "bg-red-100 dark:bg-red-900",
    border: "border-red-500 dark:border-red-700",
    text: "text-red-900 dark:text-red-100",
    icon: "text-red-600",
    message: "Error - Algo deu errado.",
  },
};

function AlertMessages({ type = "info", mensagem }) {
  const style = alertStyles[type] || alertStyles.info;

  return React.createElement(
    "div",
    {
      role: "alert",
      className: `${style.bg} ${style.border} ${style.text} p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-opacity-80 transform hover:scale-105 mt-2`,
    },
    [
      React.createElement(
        "svg",
        {
          key: "icon",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          fill: "none",
          className: `h-5 w-5 flex-shrink-0 mr-2 ${style.icon}`,
          xmlns: "http://www.w3.org/2000/svg",
        },
        React.createElement("path", {
          d: "M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          strokeWidth: 2,
          strokeLinejoin: "round",
          strokeLinecap: "round",
        })
      ),
      React.createElement(
        "p",
        { key: "text", className: "text-xs font-semibold" },
        mensagem || style.message
      ),
    ]
  );
}

export default AlertMessages;
