const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Create screenshots directory
  const dir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  console.log('Taking desktop screenshots (1440px)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 15000 });
  
  // Full page desktop
  await page.screenshot({ path: path.join(dir, 'desktop-full.png'), fullPage: true });
  console.log('  ✓ desktop-full.png');
  
  // Hero
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 15000 });
  const hero = await page.$('#inicio');
  if (hero) { await hero.screenshot({ path: path.join(dir, 'hero-desktop.png') }); console.log('  ✓ hero-desktop.png'); }
  
  // Languages
  await page.evaluate(() => document.querySelector('#idiomas').scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  const lang = await page.$('#idiomas');
  if (lang) { await lang.screenshot({ path: path.join(dir, 'languages.png') }); console.log('  ✓ languages.png'); }
  
  // English course
  await page.evaluate(() => document.querySelector('#ingles').scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  const course = await page.$('#ingles');
  if (course) { await course.screenshot({ path: path.join(dir, 'english-course.png') }); console.log('  ✓ english-course.png'); }
  
  // Location
  await page.evaluate(() => document.querySelector('#ubicacion').scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  const loc = await page.$('#ubicacion');
  if (loc) { await loc.screenshot({ path: path.join(dir, 'location.png') }); console.log('  ✓ location.png'); }
  
  // CTA
  await page.evaluate(() => document.querySelector('#contacto').scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  const cta = await page.$('#contacto');
  if (cta) { await cta.screenshot({ path: path.join(dir, 'cta.png') }); console.log('  ✓ cta.png'); }
  
  // Footer
  await page.evaluate(() => document.querySelector('footer').scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  const footer = await page.$('footer');
  if (footer) { await footer.screenshot({ path: path.join(dir, 'footer.png') }); console.log('  ✓ footer.png'); }
  
  console.log('\nTaking mobile screenshots (375px)...');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 15000 });
  
  // Full page mobile
  await page.screenshot({ path: path.join(dir, 'mobile-full.png'), fullPage: true });
  console.log('  ✓ mobile-full.png');
  
  // Mobile hero
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 15000 });
  const mHero = await page.$('#inicio');
  if (mHero) { await mHero.screenshot({ path: path.join(dir, 'hero-mobile.png') }); console.log('  ✓ hero-mobile.png'); }
  
  // Mobile menu
  const menuBtn = await page.$('button[aria-label="Abrir menú"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(dir, 'mobile-menu.png') });
    console.log('  ✓ mobile-menu.png');
  }
  
  await browser.close();
  console.log('\n✅ All screenshots captured successfully!');
  console.log('Screenshots saved to:', dir);
})();
