function encodeBase64() {
  const text = document.getElementById("plainInput").value;
  try {
    const encoded = btoa(text);
    document.getElementById("result").innerText = encoded;
  } catch {
    document.getElementById("result").innerText = "[ERROR] Gagal encode.";
  }
}

function decodeBase64() {
  const text = document.getElementById("base64Input").value.trim();
  try {
    const decoded = atob(text);
    document.getElementById("result").innerText = decoded;
  } catch {
    document.getElementById("result").innerText = "[ERROR] Base64 tidak valid.";
  }
}