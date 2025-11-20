$file = "c:\Users\USER\Desktop\PLP-MERN-FULL-Stack\Hands On\deployment-and-devops-essentials-Nattydread777\frontend\src\components\Footer.jsx"
$content = Get-Content $file -Raw

# Remove Nairobi/Kenya reference
$content = $content -replace 'Delta State,\s+Nigeria \(WAT\) • Nairobi, Kenya \(EAT\)','Delta State, Nigeria (WAT)'

# Separate Phone and WhatsApp into two lines
$content = $content -replace '<FaPhone style=\{\{ marginRight: 6 \}\} /> Phone / WhatsApp: \+234\s+807 320 8945','<FaPhone style={{ marginRight: 6 }} /> Phone: +234 807 320 8945
              </li>
              <li>
                <a href="https://wa.me/2348073208945" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                  <FaWhatsapp style={{ marginRight: 6 }} /> WhatsApp: +234 807 320 8945
                </a>'

Set-Content $file -Value $content -NoNewline
Write-Host "Footer.jsx updated successfully!"
