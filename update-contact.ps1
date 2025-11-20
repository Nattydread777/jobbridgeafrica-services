$file = "c:\Users\USER\Desktop\PLP-MERN-FULL-Stack\Hands On\deployment-and-devops-essentials-Nattydread777\frontend\src\pages\Contact.jsx"
$content = Get-Content $file -Raw

# Update Phone/WhatsApp section
$content = $content -replace '(?s)<div className="contact-item">\s+<div className="contact-item-icon">\s+<FaPhone />\s+</div>\s+<div>\s+<h3>Phone / WhatsApp</h3>\s+<p>\s+\+234 807 320 8945\{" "\}\s+<FaWhatsapp style=\{\{ marginLeft: 6, color: "#25D366" \}\} />\s+</p>\s+<p style=\{\{ fontSize: "0\.85rem", opacity: 0\.8 \}\}>\s+Call / Chat Mon–Sun\s+</p>\s+</div>\s+</div>','<div className="contact-item">
                  <div className="contact-item-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+234 807 320 8945</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3>WhatsApp</h3>
                    <p>
                      <a href="https://wa.me/2348073208945" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none" }}>
                        +234 807 320 8945
                      </a>
                    </p>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      Click to chat Mon–Sun
                    </p>
                  </div>
                </div>'

# Remove Kenya/Nairobi references
$content = $content -replace '<p>Extended operations Nairobi, Kenya \(EAT\)</p>\s+',''
$content = $content -replace '<p>\s+<strong>Secondary \(EAT - Nairobi\):</strong> Mon–Fri 09:00 –\s+19:00\s+</p>\s+',''

Set-Content $file -Value $content -NoNewline
Write-Host "Contact.jsx updated successfully!"
