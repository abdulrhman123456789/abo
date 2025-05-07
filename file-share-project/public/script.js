
document.getElementById('uploadForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const fileInput = document.getElementById('fileInput');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  if (result.url) {
    document.getElementById('linkContainer').style.display = 'block';
    document.getElementById('fileLink').value = result.url;
  }
});

function copyLink() {
  const link = document.getElementById('fileLink');
  link.select();
  document.execCommand('copy');
}
