const { exec } = require("child_process");
const os = require("os");

const installJava = () => {
  let command;

  if (os.platform() === "win32") {
    command = "winget install EclipseAdoptium.Temurin.17.JRE";
  } else if (os.platform() === "darwin") {
    command = "brew install openjdk@17";
  } else {
    command = "sudo apt update && sudo apt install -y openjdk-17-jre";
  }

  console.log(`Instalando Java con: ${command}`);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al instalar Java: ${error.message}`);
      return;
    }
    console.log(`Salida estándar: ${stdout}`);
    console.error(`Salida de error: ${stderr}`);
    console.log("Java instalado correctamente.");
  });
};

installJava();
