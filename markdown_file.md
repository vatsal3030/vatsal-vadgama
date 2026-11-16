# Clone portfolio with your details

> reverse engineer or clone this whole protoflio ([https://sarthak-sharma-portfolio-six.vercel.app/](https://sarthak-sharma-portfolio-six.vercel.app/))  for me . you already have all my deatils from previus chat and resume and social platforms so first from reserach grab all infomation, conentent, reverser engiiner or clone that given portoflio and replace our deatiles at appropiate and keep relavant compeonts and pages and context and deatils accoding to me. also view old portoflio for more information (portfolio.vixora.co.in).
>
> User context
>
> Attachments:
> - RESUME.pdf: `D:/RESUME/SDE_RESUME/RESUME.pdf`

<details><summary>6 previous messages</summary>

> I’ll inspect the existing portfolio project and resume, then research both portfolio sites and map the reference’s structure onto your details. I’ll keep the implementation in the current workspace and preserve relevant sections while replacing the original owner’s content.
>
> <details><summary>Ran 4 commands, searched the web</summary>
>
> - Ran `Get-ChildItem -Force | Select-Object Mode,Name,Length`
>
> - Ran `Get-ChildItem -Path 'D:\RESUME\SDE_RESUME\RESUME.pdf' | Select-Object FullName,Length,LastWriteTime`
>
> Searched the web for `https://sarthak-sharma-portfolio-six.vercel.app/`
>
> - Ran `Get-Location; rg --files -g '!node_modules' -g '!dist' | Select-Object -First 100`
>
> - Ran `python -c "import importlib.util; print('pymupdf',bool(importlib.util.find_spec('fitz'))); print('pypdf',bool(importlib.util.find_spec('pypdf')))"; where.exe pdftotext`
>
> Searched the web for `site:portfolio.vixora.co.in ...`
>
> </details>
>
> The reference is a long-form personal portfolio with work, process, impact, teaching/content, speaking, timeline, and contact sections. I also found a publicly indexed earlier Vatsal portfolio with project and education details, while `portfolio.vixora.co.in` itself isn’t opening through the research fetcher. I’m checking the local project and your resume now so the replacement content is grounded in your own materials.
>
> <details><summary>Ran 7 commands, searched the web</summary>
>
> - Ran `pdftotext -layout 'D:\RESUME\SDE_RESUME\RESUME.pdf' -`
>
> - Ran `Get-ChildItem -Force | Format-List *; Get-ChildItem -Force -Recurse -Depth 2 | Select-Object FullName,Mode,Length | Select-Object -First 100`
>
> Searched the web for `https://portfolio.vixora.co.in/`
>
> - Ran `Get-ChildItem -Force | Select-Object Name,FullName,Mode,Length`
>
> - Ran `Get-ChildItem -Force 'C:\Users\VATSAL\OneDrive\Dokumen\ChatGPT\reverse_enginered_portoflio' | Select-Object Name,FullName,Mode,Length`
>
> Searched the web for `"portfolio.vixora.co.in" Vatsal Vadgama ...`
>
> - Ran `python -c "from pypdf import PdfReader; p=PdfReader(r'D:\RESUME\SDE_RESUME\RESUME.pdf'); print('pages',len(p.pages)); [print(i+1, p.pages[i].get('/Annots')) for i in range(len(p.pages))]"; Get-ChildItem -Force 'E:\portfolio' | Measure-Object | Select-Object Count; git status --short --branch`
>
> - Ran `python -c "from pypdf import PdfReader; r=PdfReader(r'D:\RESUME\SDE_RESUME\RESUME.pdf');\nfor a in r.pages[0].get('/Annots',[]):\n o=a.get_object(); print(o.get('/A',{}).get('/URI'), o.get('/Rect'))"`
>
> Tool call
>
> Tool: list_threads
> Status: completed
>
> - Ran `python -c "from pypdf import PdfReader; p=PdfReader(r'D:\RESUME\SDE_RESUME\RESUME.pdf'); [print(a.get_object().get('/A',{}).get('/URI')) for a in p.pages[0].get('/Annots',[])]"; try { Resolve-DnsName portfolio.vixora.co.in -ErrorAction Stop | Select-Object Name,Type,IPAddress } catch { $_.Exception.Message }`
>
> Tool call
>
> Tool: read_thread
> Status: completed
>
> Tool call
>
> Tool: read_thread
> Status: completed
>
> </details>
>
> The resume gives a clearer direction than the older indexed site: this should be an engineering portfolio focused on backend systems, full stack products, and measurable project work. I’ve recovered your LinkedIn, GitHub, competitive programming profiles, and the resume’s live/demo links. The current `E:\portfolio` folder is empty, so I’m building the site there from scratch and carrying over the reference’s full-page story structure in a version tailored to you.
>
> <details><summary>Created 4 files, edited a file, ran 2 commands, searched the web</summary>
>
> Searched the web for `https://github.com/vatsal3030`
>
> - Wrote `./app.js` (+87 -0)
> - Wrote `./index.html` (+70 -0)
> - Wrote `./styles.css` (+1 -0)
>
> - Wrote `./README.md` (+11 -0)
>
> - Ran `New-Item -ItemType Directory -Force -Path 'E:\portfolio\assets' | Out-Null; Copy-Item -LiteralPath 'D:\RESUME\SDE_RESUME\RESUME.pdf' -Destination 'E:\portfolio\assets\Vatsal-Vadgama-Resume.pdf' -Force; Get-ChildItem -Recurse -File | Select-Object FullName,Length`
>
> - Wrote `./index.html` (+1 -1)
>
> - Ran `Add-Content -LiteralPath 'E:\portfolio\styles.css' -Value '.contact-extra{display:flex;gap:24px;align-items:center;margin-top:22px;color:var(--muted);font:9px var(--mono);letter-spacing:.08em}.contact-extra a{color:var(--text)}.contact-extra a:hover{color:var(--lime)}@media(max-width:700px){.contact-extra{align-items:flex-start;flex-direction:column;gap:9px;font-size:8px}}'`
>
> </details>
</details>

Built the portfolio from scratch in [`E:\portfolio`](</E:/portfolio/index.html>). It follows the reference’s long-form flow, adapted to your engineering work: introduction, selected projects, approach and skills, achievements, experience and education, profiles, and contact.

Your resume is included as a downloadable asset at [`assets/Vatsal-Vadgama-Resume.pdf`](</E:/portfolio/assets/Vatsal-Vadgama-Resume.pdf>). Project cards open detail panels with links to the project repositories and demos. The page also includes responsive navigation, reduced-motion support, and scroll reveals.

The reference was available to review at [Sarthak Sharma’s portfolio](https://sarthak-sharma-portfolio-six.vercel.app/). I couldn’t retrieve [portfolio.vixora.co.in](https://portfolio.vixora.co.in/), so I based your content on the supplied resume and its linked profiles. The workspace was empty, so this is a standalone static site with no build step; open `index.html` or serve the folder with a static file server.

> good work . very good base form . now needed advancement in animation , effect and make it story telling native flow on scroll . need polished ui  . use these for  better componenets :
> 1️⃣ Motion → smooth entrances instead of things popping in\
> 2️⃣ GSAP → now 100% free, every pro plugin included\
> 3️⃣ React Bits → copy-paste text effects and backgrounds\
> 4️⃣ Magic UI → your AI adds components just by name\
> 5️⃣ Lenis → the smooth scroll on Rockstar’s GTA VI site\

<details><summary>9 previous messages</summary>

> I’ll evolve the existing page into a scroll-led story: sections will hand off through shared visual cues, project scenes will react to scroll progress, and motion will enter with restraint. I’m checking current GSAP and Lenis guidance first, then I’ll wire the motion into the portfolio without changing your project facts.
>
> <details><summary>Ran 2 commands, searched the web</summary>
>
> Searched the web for `site:gsap.com/docs/v3/ GSAP ScrollTrigger official docs ...`
>
> Searched the web for `site:gsap.com/blog GSAP completely free including all premium plugins 2025 official ...`
>
> - Ran `Get-Content index.html | Select-Object -First 25; Get-Content index.html | Select-Object -Last 20; Get-Content app.js; rg -n '^:root|^\.hero|^\.hero-copy|^\.project-visual|^\.site-header|^\.signal-strip|^@media|reveal|@keyframes|\.grain' styles.css`
>
> - Ran `Get-Content app.js | Select-Object -Last 45; Get-Content index.html | Select-Object -Last 6; Get-Content styles.css | Select-Object -Last 2 | Out-String`
>
> </details>
>
> I’ve confirmed the current versions and integration pattern: Lenis can keep native scrolling behavior while feeding updates into GSAP ScrollTrigger. I’m keeping the site as a lightweight static build, so I’ll use those directly and create the React Bits / Magic UI-style reveals, progress, and glowing card treatments in the existing markup rather than introducing a framework migration.
>
> <details><summary>Edited 2 files, ran 2 commands</summary>
>
> - Wrote `./index.html` (+17 -2)
> - Wrote `./app.js` (+111 -8)
> - Wrote `./app.js` (+9 -4)
> - Ran `Add-Content -LiteralPath 'E:\portfolio\styles.css' -Value @'
>
> /* Scroll-led chapter system */
> html{scroll-behavior:auto;scroll-padding-top:92px}.site-header{position:sticky;top:0;background:rgba(17,19,16,.82);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}.scroll-progress{position:fixed;z-index:30;top:0;left:0;width:100%;height:2px;pointer-events:none;background:#ffffff0c}.scroll-progress span{display:block;width:100%;height:100%;background:var(--lime);transform:scaleX(0);transform-origin:left center;box-shadow:0 0 12px #c8f16970}.chapter-nav{position:fixed;z-index:18;right:max(17px,calc((100vw - 1440px)/2));top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;gap:12px;padding:12px 7px;color:#b8bcaf}.chapter-nav:before{content:"";position:absolute;z-index:-1;inset:0 -5px;background:linear-gradient(90deg,transparent,#111310db 25%,#111310db 75%,transparent);filter:blur(6px)}.chapter-current{position:absolute;right:25px;top:50%;transform:translateY(-50%);white-space:nowrap;opacity:0;transition:opacity .25s;color:var(--lime);font:9px var(--mono);letter-spacing:.08em}.chapter-current i{font-style:normal;color:#b9bdaf;margin-left:5px}.chapter-nav:hover .chapter-current{opacity:1}.chapter-nav a{width:7px;height:7px;border:1px solid #7a8170;border-radius:50%;transition:transform .35s,background .35s,border-color .35s,box-shadow .35s}.chapter-nav a:hover{transform:scale(1.35);border-color:var(--lime)}.chapter-nav a.is-active{background:var(--lime);border-color:var(--lime);transform:scale(1.35);box-shadow:0 0 13px #c8f16980}.hero{isolation:isolate}.hero:before{content:"";position:absolute;z-index:-1;inset:-10% -20% 4% 25%;background:radial-gradient(ellipse at 72% 47%,#c8f1690e,transparent 35%),linear-gradient(#ffffff05 1px,transparent 1px),linear-gradient(90deg,#ffffff05 1px,transparent 1px);background-size:auto,62px 62px,62px 62px;mask-image:radial-gradient(ellipse at 67% 50%,#000 4%,transparent 74%);pointer-events:none}.hero-decoration{will-change:transform}.orbit-core{animation:core-breathe 5.4s ease-in-out infinite alternate}.orbit-one{border-color:#a4b78642}.hero-period{display:inline-block;transform-origin:50% 80%;animation:period-pulse 2.8s ease-in-out infinite alternate}@keyframes core-breathe{from{box-shadow:0 0 50px #c8f1690d;transform:translate(-50%,-50%) scale(.97)}to{box-shadow:0 0 105px #c8f16925;transform:translate(-50%,-50%) scale(1.035)}}@keyframes period-pulse{to{text-shadow:0 0 35px #c8f16970;transform:scale(1.12)}}.project-card{position:relative;isolation:isolate;--pointer-x:50%;--pointer-y:50%;transition:border-color .45s,transform .45s;will-change:transform}.project-card:after{content:"";position:absolute;inset:0;z-index:4;pointer-events:none;opacity:0;background:radial-gradient(430px circle at var(--pointer-x) var(--pointer-y),#d8ff9b15,transparent 66%);transition:opacity .4s}.project-card:hover{border-color:#79865588}.project-card:hover:after{opacity:1}.project-visual{transform-origin:center center;will-change:transform}.screen-frame,.access-panel,.spectrum-card{transition:box-shadow .55s,border-color .55s;will-change:transform}.project-card:hover .screen-frame{box-shadow:0 28px 95px #000a,0 0 30px #c8f16917;border-color:#c8f16983}.project-card:hover .access-panel{box-shadow:0 28px 95px #000a,0 0 34px #63e3ad1c;border-color:#7df0c083}.project-card:hover .spectrum-card{box-shadow:0 28px 95px #000a,0 0 34px #d7a95a1c;border-color:#d5ae7080}.project-card:hover .screen-play{animation:screen-glow 2.8s ease-in-out infinite alternate}@keyframes screen-glow{to{filter:saturate(1.25) brightness(1.12)}}.section-heading{position:relative}.section-heading:after{content:"";position:absolute;left:0;bottom:-1px;width:clamp(36px,8vw,110px);height:1px;background:var(--lime);transform-origin:left center;box-shadow:0 0 12px #c8f16958}.flow article,.metric-card,.profile-links a{transition:border-color .35s,background .35s,transform .35s}.flow article:hover{border-color:#98b86a80;background:linear-gradient(145deg,#20241b,#141612)}.metric-card:hover{border-color:#c8f16973;background:linear-gradient(145deg,#1c2018,#141612);transform:translateY(-4px)}.flow-icon{transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}.flow article:hover .flow-icon{transform:rotate(-8deg) scale(1.1);box-shadow:0 0 24px #c8f16918}.timeline{position:relative}.timeline:before{content:"";position:absolute;left:0;top:0;bottom:0;width:1px;background:linear-gradient(var(--lime),#c8f16900);transform-origin:top center;opacity:.5}.timeline-item{padding-left:14px}.contact-spark{filter:drop-shadow(0 0 22px #c8f16920)}.contact-button{box-shadow:0 0 0 0 #c8f16924;transition:transform .25s,box-shadow .35s,background .25s}.contact-button:hover{box-shadow:0 8px 35px #c8f16924}.reveal,.reveal.is-visible{opacity:1;transform:none}
> @media(max-width:1000px){.chapter-nav{right:9px;gap:10px}.chapter-nav a{width:6px;height:6px}}
> @media(max-width:700px){html{scroll-padding-top:74px}.chapter-nav{display:none}.site-header{top:0}.hero:before{inset:-4% -80% 0 0;background-size:auto,42px 42px,42px 42px}.project-card:after{display:none}.project-card:hover{transform:none}.project-card:hover .screen-frame,.project-card:hover .access-panel,.project-card:hover .spectrum-card{box-shadow:0 20px 70px #0008}.metric-card:hover{transform:none}}
> @media(prefers-reduced-motion:reduce){.orbit-core,.hero-period,.contact-spark{animation:none!important}.project-card,.screen-frame,.access-panel,.spectrum-card,.flow-icon,.metric-card{transition:none!important}}
> '@`
> - Wrote `./index.html` (+1 -1)
> - Wrote `./app.js` (+6 -3)
> - Wrote `./app.js` (+13 -1)
> - Ran `Add-Content -LiteralPath 'E:\portfolio\styles.css' -Value '.hero-line{display:block;overflow:hidden;padding:.07em 0 .1em;margin:-.07em 0 -.1em}.hero-line-inner{display:block;will-change:transform}.timeline-progress-line{position:absolute;z-index:1;left:0;top:0;bottom:0;width:1px;background:linear-gradient(var(--lime),#c8f16920);transform:scaleY(0);transform-origin:top center;box-shadow:0 0 12px #c8f16958}.timeline:before{display:none}'`
>
> </details>
>
> The scroll system is in place now: smooth native scrolling, a page progress line, chapter navigation that follows the active section, and scroll-scrubbed motion through the hero, project scenes, and journey timeline. I’m doing a visual pass on the actual page next, with reduced-motion and small-screen behavior in mind.
>
> I’m applying the computer-use skill to preview the changed page in a browser so I can catch layout issues in the real render.
>
> <details><summary>Ran 3 commands, called 9 tools</summary>
>
> <details><summary>Explored a file</summary>
>
> - Read `C:/Users/VATSAL/.codex/plugins/cache/openai-bundled/computer-use/26.1111.21308/skills/computer-use/SKILL.md`
>
> </details>
>
> - Ran `Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\guidance.md'; Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\confirmations.md'; rg -n 'capture|browser|launch|window|keypress|screenshot|mouse|url' 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\api.md' | Select-Object -First 100`
>
> - Ran `Get-Content app.js | Select-Object -Last 180; rg -n 'lenis|gsap|scroll-progress|chapter-nav|hero-line|data-project' index.html app.js styles.css | Select-Object -First 120`
>
> - Ran `$server = Get-Command python -ErrorAction Stop; Start-Process -FilePath $server.Source -ArgumentList @('-m','http.server','8765','--directory','E:\portfolio') -WindowStyle Hidden; Start-Sleep -Milliseconds 700; try { (Invoke-WebRequest -Uri 'http://127.0.0.1:8765/' -Method Head).StatusCode } catch { $_.Exception.Message }`
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "if (!globalThis.sky) { const { sky } = await import('@oai/sky'); globalThis.sky = sky; }",
>   "title": "Initializing browser preview"
> }
> ```
>
> ```text
>
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.apps = await sky.list_apps(); nodeRepl.write(JSON.stringify(apps.map(a => ({id:a.id, windows:a.windows.map(w=>({id:w.id,title:w.title}))})), null, 2));",
>   "title": "Selecting the browser window"
> }
> ```
>
> ```text
> [
>   {
>     "id": "Brave",
>     "windows": [
>       {
>         "id": 199488,
>         "title": "I Built My Entire Portfolio With AI… And It Looks Insane - YouTube - Brave"
>       }
>     ]
>   },
>   {
>     "id": "OpenAI.Codex_2p2nqsd0c76g0!App",
>     "windows": [
>       {
>         "id": 133404,
>         "title": "ChatGPT"
>       }
>     ]
>   },
>   {
>     "id": "Chrome",
>     "windows": [
>       {
>         "id": 263808,
>         "title": "New Tab - Google Chrome"
>       }
>     ]
>   },
>   {
>     "id": "Google.AntigravityIDE",
>     "windows": [
>       {
>         "id": 264664,
>         "title": "RMS - Antigravity IDE - DEPLOYMENT_MODELS_REMOTE_ACCESS_AND_PRICING_GUIDE.md"
>       },
>       {
>         "id": 132618,
>         "title": "Expense_tracker - Antigravity IDE - 03-owino-fix-pass-agent-prompt.md"
>       }
>     ]
>   },
>   {
>     "id": "Microsoft.WindowsNotepad_8wekyb3d8bbwe!App",
>     "windows": [
>       {
>         "id": 201640,
>         "title": "design_prompt.txt - Notepad"
>       }
>     ]
>   },
>   {
>     "id": "process:C:\\Windows\\explorer.exe",
>     "windows": [
>       {
>         "id": 70130,
>         "title": "portfolio - File Explorer"
>       }
>     ]
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\VideoLAN\\VLC\\vlc.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{51325390-AE6A-68FC-A315-0950CC83A166}",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{30BD9A02-CB9A-93FD-A859-09C8803F2346}",
>     "windows": []
>   },
>   {
>     "id": "Claude_pzs8sxrjxfjjc!Claude",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Steam\\Steam.exe",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Samsung\\Samsung Magician\\SamsungMagician.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.POWERPNT.EXE.15",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\POWERPNT.EXE",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.WINWORD.EXE.15",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\WINWORD.EXE",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\MySQL\\MySQL Workbench 8.0\\MySQLWorkbench.exe",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\services.msc",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{C2A4A863-0656-6D2C-6664-92F1631676F8}",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Blackmagic Design\\DaVinci Resolve\\Resolve.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.VisualStudio.Installer",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\msinfo32.exe",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Cloudflare\\Cloudflare WARP\\Cloudflare WARP.exe",
>     "windows": []
>   },
>   {
>     "id": "com.squirrel.Discord.Discord",
>     "windows": []
>   },
>   {
>     "id": "AcrobatReader",
>     "windows": []
>   },
>   {
>     "id": "{F38BF404-1D43-42F2-9305-67DE0B28FC23}\\regedit.exe",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\cleanmgr.exe",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\GRETECH\\GOMPlayer\\GOM.EXE",
>     "windows": []
>   },
>   {
>     "id": "AdvancedMicroDevicesInc-2.AMDRadeonSoftware_0a9344xs7nr4m!AMDRadeonsoftwareUWP",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{C17D49BC-3948-20AC-2799-FD5933B521F5}",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.MSACCESS.EXE.15",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\MSACCESS.EXE",
>     "windows": []
>   },
>   {
>     "id": "AdobeSystemsIncorporated.AdobePhotoshopExpress_mtcwf2zmmt10c!AddText",
>     "windows": []
>   },
>   {
>     "id": "AdobeSystemsIncorporated.AdobePhotoshopExpress_mtcwf2zmmt10c!App",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\PostgreSQL\\16\\bin\\stackbuilder.exe",
>     "windows": []
>   },
>   {
>     "id": "B9ECED6F.ArmouryCrate_qmba6cd70vzyy!App",
>     "windows": []
>   },
>   {
>     "id": "googleplaygames://launch/?id=com.gameloft.android.ANMP.GloftA9HM&lid=1&pid=1",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Player\\BlackmagicRAWPlayer.exe",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Speed Test\\BlackmagicRAWSpeedTest.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App",
>     "windows": []
>   },
>   {
>     "id": "Chrome",
>     "windows": [
>       {
>         "id": 70392,
>         "title": "diff b/w permuum and deudrant - Google Search - Google Chrome"
>       }
>     ]
>   }
> ]
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.chrome = apps.find(a => a.id === 'Chrome'); globalThis.browserWindow = await sky.get_window({id:263808, app:chrome.id}); await sky.activate_window({window:browserWindow}); globalThis.state = await sky.get_window_state({window:browserWindow, include_screenshot:false, include_text:true}); nodeRepl.write(String(state.accessibility?.tree || state.accessibility?.document_text || ''));",
>   "title": "Inspecting the preview tab"
> }
> ```
>
> ````text
> Window: "New Tab - Google Chrome", App: chrome.exe.
> 	0 window New Tab - Google Chrome Secondary Actions: Raise
> 		1 pane (disabled)
> 		2 pane (region) New Tab - Google Chrome - Vatsal (Your Chrome)
> 			3 pane (region)
> 				4 pane (region)
> 					5 pane (region)
> 						6 button Minimize ID: view_1
> 						7 button Maximize ID: view_2
> 						8 button Close ID: view_4
> 					9 pane (region)
> 						10 pane (region)
> 							11 toolbar (tool bar) ID: view_1000
> 								12 button (disabled) Back ID: view_1001
> 								13 button (disabled) Forward ID: view_1002
> 								14 button Reload ID: view_1003
> 								15 group
> 									16 document Search icon ID: view_1011
> 									17 text field (edit) (settable, string) Address and search bar Description: Press tab then enter to ask AI Mode. Press up or down arrow for auto completions. Type to autocomplete.. ID: view_1012
> 									18 pane (region)
> 										19 button AI Mode button, press Enter to ask AI Mode
> 								20 pane (region)
> 									21 button Buyhatke: Price History & Tracker, Spend Lens ID: view_1009
> 									22 button Extensions ID: view_1006
> 								23 pane (region)
> 								24 button Vatsal (Your Chrome) ID: view_1018
> 								25 button Chrome ID: view_1007
> 						26 pane (region)
> 							27 pane (region)
> 								28 pane (region)
> 								29 document New Tab Value: chrome://new-tab-page/ ID: RootWebArea
> 									30 document Value: chrome-untrusted://new-tab-page/one-google-bar?paramsencoded= ID: RootWebArea
> 										31 group (banner) ID: gb
> 											32 text (heading)
> 											33 hyperlink (link) Gmail Value: https://mail.google.com/mail/u/0/?tab=rm&ogbl
> 											34 hyperlink (link) Search for Images Value: https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl
> 											35 group ID: gbwa
> 												36 button Google apps
> 											37 button Google Account: Vatsal Vadgama (vatsalvadgama04@gmail.com), Google membership
> 									38 button Enhance your search with tabs, files, or an AI tool Description: Enhance your search with tabs, files, or an AI tool ID: entrypoint
> 									39 group ID: menu
> 									40 combo box (settable, string) Ask Google Description: Ask Google ID: input
> 									41 button Search by voice Description: Search by voice ID: voiceSearchButton
> 									42 button Search by image Description: Search by image ID: lensSearchButton
> 									43 button Ask AI Mode in Google Search Description: Ask AI Mode in Google Search ID: composeButton
> 									44 button Do more with AI Mode Create, summarize, plan Description: Do more with AI Mode Create, summarize, plan
> 										45 group Description: Do more with AI Mode Create, summarize, plan
> 									46 button Create images Reimagine, illustrate, edit Description: Create images Reimagine, illustrate, edit
> 										47 group Description: Create images Reimagine, illustrate, edit
> 									48 group ID: actionMenu
> 									49 group Description: YouTube
> 										50 hyperlink (link) YouTube Value: https://www.youtube.com/
> 										51 button More actions for YouTube shortcut Description: More actions for YouTube shortcut ID: actionMenuButton
> 										52 text YouTube
> 									53 group Description: ChatGPT
> 										54 hyperlink (link) ChatGPT Value: https://chat.openai.com/
> 										55 button More actions for ChatGPT shortcut Description: More actions for ChatGPT shortcut ID: actionMenuButton
> 										56 text ChatGPT
> 									57 group Description: LEET CODE
> 										58 hyperlink (link) LEET CODE Value: https://leetcode.com/problemset/
> 										59 button More actions for LEET CODE shortcut Description: More actions for LEET CODE shortcut ID: actionMenuButton
> 										60 text LEET CODE
> 									61 group Description: TRANSLATOR
> 										62 hyperlink (link) TRANSLATOR Value: https://www.google.com/search?q=english+to+gujarati&rlz=1C1VDKB_enIN1067IN1067&oq=eglish+to+&gs_lcrp=EgZjaHJvbWUqDwgCEAAYChiDARixAxiABDIGCAAQRRg5Mg8IARAAGAoYgwEYsQMYgAQyDwgCEAAYChiDARixAxiABDIMCAMQABgKGLEDGIAEMgkIBBAAGAoYgAQyDwgFEAAYChiDARixAxiABDIJCAYQABgKGIAEMgYIBxBFGDzSAQg0MjE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
> 										63 button More actions for TRANSLATOR shortcut Description: More actions for TRANSLATOR shortcut ID: actionMenuButton
> 										64 text TRANSLATOR
> 									65 group Description: CodoLio
> 										66 hyperlink (link) CodoLio Value: https://codolio.com/profile/Vatsal30
> 										67 button More actions for CodoLio shortcut Description: More actions for CodoLio shortcut ID: actionMenuButton
> 										68 text CodoLio
> 									69 group Description: Codeforces
> 										70 hyperlink (link) Codeforces Value: https://codeforces.com/profile/23bce359
> 										71 button More actions for Codeforces shortcut Description: More actions for Codeforces shortcut ID: actionMenuButton
> 										72 text Codeforces
> 									73 group Description: TUF
> 										74 hyperlink (link) TUF Value: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/
> 										75 button More actions for TUF shortcut Description: More actions for TUF shortcut ID: actionMenuButton
> 										76 text TUF
> 									77 group Description: GITHUB
> 										78 hyperlink (link) GITHUB Value: https://github.com/
> 										79 button More actions for GITHUB shortcut Description: More actions for GITHUB shortcut ID: actionMenuButton
> 										80 text GITHUB
> 									81 group Description: NIRMA POD
> 										82 hyperlink (link) NIRMA POD Value: https://nirmauni.pod.ai/d/sXfPHC/opportunities/
> 										83 button More actions for NIRMA POD shortcut Description: More actions for NIRMA POD shortcut ID: actionMenuButton
> 										84 text NIRMA POD
> 									85 button Add shortcut Description: Add shortcut ID: addShortcut
> 									86 button Show less Description: Show less ID: showLess
> 									87 group ID: actionMenu
> 									88 button (toggle button) Customize Chrome Description: Customize this page ID: customizeButton
> 										89 image (graphic) ID: baseSvg
> 										90 text Customize Chrome
> 									91 image (graphic)
> 							92 pane (region)
> 						93 pane (region)
> 							94 pane (region)
> 								95 button Tab search
> 							96 pane (region) ID: view_21
> 								97 tab
> 									98 tab item (selectable) Table Editor | vatsalvadgama05@gmail.com's Project | FairShare | Supabase ID: view_20
> 									99 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access ID: view_20
> 									100 tab item (selectable) Gemini In Antigravity Comparison ID: view_20
> 									101 tab item (selectable) Owino FairShare | Smart Expense Splitting & Debt Minimization ID: view_20
> 									102 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access ID: view_20
> 									103 tab item (selectable) localhost - Network error ID: view_20
> 									104 tab item (selectable) Liquid glassmorphism UI redesign prompt - Claude ID: view_20
> 									105 tab item (selectable) Redesign UI UX Screens - Memory usage - 477 MB ID: view_20
> 									106 tab item (selectable) New Tab - Memory usage - 109 MB ID: view_20
> 										107 button Close
> 								108 pane (region)
> 							109 button New Tab
> 							110 pane (region)
> 							111 pane (region)
> 								112 button Open Gemini in Chrome
> 								113 pane (region)
> 						114 pane (region)
>
> Document text: ```
> ￼
> ￼
> GmailImages  
> ￼  
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> AI Mode
> ￼
> Do more with AI Mode
> Create, summarize, plan
> Create images
> Reimagine, illustrate, edit
> ￼
> YouTube
> ￼
> YouTube
> ChatGPT
> ￼
> ChatGPT
> LEET CODE
> ￼
> LEET CODE
> TRANSLATOR
> ￼
> TRANSLATOR
> CodoLio
> ￼
> CodoLio
> Codeforces
> ￼
> Codeforces
> TUF
> ￼
> TUF
> GITHUB
> ￼
> GITHUB
> NIRMA POD
> ￼
> NIRMA POD
> ￼
> Add shortcut
> ￼
> Show less
> ￼
> ￼
> ￼
> Customize Chrome
> ￼
> ```
> ````
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{ const observation = globalThis.state; globalThis.state = null; await sky.click({window:observation.window, element_index:17}); globalThis.state = await sky.get_window_state({window:observation.window, include_screenshot:true, include_text:true}); globalThis.browserWindow = state.window; }",
>   "title": "Opening the local portfolio"
> }
> ```
>
> Error: window bounds changed; call get_window_state before using this window
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.windows = await sky.list_windows(); nodeRepl.write(JSON.stringify(windows.filter(w=>w.app==='Chrome').map(w=>({id:w.id,app:w.app,title:w.title})),null,2));",
>   "title": "Refreshing the browser selection"
> }
> ```
>
> ```text
> [
>   {
>     "id": 263808,
>     "app": "Chrome",
>     "title": "New Tab - Google Chrome"
>   },
>   {
>     "id": 70392,
>     "app": "Chrome",
>     "title": "diff b/w permuum and deudrant - Google Search - Google Chrome"
>   }
> ]
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.browserWindow = await sky.get_window({id:263808,app:'Chrome'}); globalThis.state = await sky.get_window_state({window:browserWindow,include_screenshot:true,include_text:false}); globalThis.browserWindow = state.window; nodeRepl.write('Refreshed browser screenshot is ready.');",
>   "title": "Capturing the browser preview"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"Refreshed browser screenshot is ready."},{"type":"image","data":"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2sAURgoDEDMmwEngnBxVm9ibq1zDord0nwve6itk0lxZacL6Z7ez/tBpI/tEiEKygqjBCGIXMhQZOAThsasfhm41PRfDdhplpA+rT6jqcE0wwoKw+R8zuR9xAXOT0BOBk4Itfuv+X+YpSUbetvz/AMjjaK1ta0G50mz0+8a4sryw1BHa2urR2ZHKNtdSHVHVlOMhlHUda07TwLq1z9lhWfTI9Tu7Y3ltpctwVuposbgQu3YGZcsEZ1YgE44pNpK7K3OWorY1nw9daPpek315c2JXVLdLu3gikdpfKYE7mGwBcdDk8k/Luw2OgtvAceo6N4Xk0nWrGTVdZe5QQTGZI2aIjCRnyOG6g7jgsRtJGTQJu25w9FdD4b8H6t4jijk00WqrKly8RuJTGJBAsZkw20r/AMtUAJIGc5IxmnW3g/Ub660uHSrnTdSTUfN8qe2mdY4vKwZfNEiI8exWVjleQwxuJxTasF1a5zlFautaFc6TbafdvPZ3djfxtJbXVo7NHJtba64dVdWU4yGUdRU0XhyefRbzUrLUdKvBZQRXN1a28sjTwRyYALAoEOCQGCuxU8GlfS41rsYlFalrZwSeFdVvXQm5t7yzhjfcRtSRbguMZwcmNOSMjHGMnPe+AvCGj6xaeGXu9Oe7nvrfVpJYxNMvnPBt8kYRgRjJGFxnPOaXMrN9v01Ca5OW/W34ux5dRXpmheFtIvvFPhCx1XShp93ffa11LSUupgY1SIvDIVZzNEWz91n5CAgAE58zqmrCWoUUUUDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrtjcHeIpGJB4Unt7VSoPSgDcooPU0UwDPIAySegAyaUo46xyD6of8K0NIwqTHuWx+QH+Jrotcsxpd5N9v0a9sXuI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NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQAu0+qf8Afa/40bT6p/32v+NJRQAu0+qf99r/AI0bT6p/32v+NJRQ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…102584 chars truncated…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AKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKCQOtLtb+5J/3yaAEopdrf3JP++TRtb+5J/3yaBCUUu1v7kn/AHyaNrf3JP8Avk0AJRS7W/uSf98mja39yT/vk0AJRS7W/uSf98mja39yT/vk0AJRS7W/uSf98mja39yT/vk0AJRS7W/uSf8AfJo2t/ck/wC+TQAlFLtb+5J/3yaNrf3JP++TQAlFLtb+5J/3yaNrf3JP++TQAlFB4OCCD6EYooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSohkfavHGSfSkqayGRI3vt/If8A16cVd2E3ZE6IqLhBgfzp1FIzBVLMQFAySegrpMRaK9P07wrF4E0RPEni6LTbm5ljaKHQ7uIuzsw4G7JUPt5OY2CjcMjO5fMW2728sFUydoY7iBngE9+O9JO4CUVbSzRtDvL17hopo5Ugto/J3rM5BZgW3DaFABJwfvDAqvLF5dp9pUyPbKRG8joqYk27ioUMxIwDg9/QHimIZRWpB4e1ac3AjswGgkmicSXEMZLQ/wCtCBnBk2ZGSm4DI9a1fEXgnUNL1y40+zMV+kFuLmScTwxrEm0FmlJkxEBnguV3dVzzQM5aitr/AIRTXRLfxvpxiNgiSXTTXEMSRI4JVy7uFKHB+YEjjrUOqeHdY0lc6lp8lvh0jZDLGXQuW2b1DFkDbG2swAOOM0AZdFa1p4d1O/uLuKxtoGktzKZIJNStRNEsbFWLqXUkL0L7Qp6jgior7Q9UsLX7Te2TwxARl8uheLzATH5sYYvFuAON4XOMdaAM6irFzYzxaHHf52G4maK1Vo9yy7MeazNkbQu9AOG3EnoBk6VloE2paabnSt07C9FqDcSw2oYFFKjDvjeWYgKHYkDgdaBGLRVw6VfDTYL8wKLa4dooQ08ayzOrBWVIS3mOwZgCFUnJHrVkeHdWN7bWkdtDNcXM72sSwXlvMDKoBaMskhVWAIOGINAzKorfXwZ4icRmPTUkEqs8RjvbZ/NC53eXtkO8jByFyRxkDIzTh8P6vNpov4bCR7UxPOpDoHeNCA8ixlvMZASAWVSBnrQBmVUnj8ogrnYTjHpVukZQ6sh/iGKmUeZDTsUaKQHIpa5zYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAO1SWRw8ikjnDAfof6VHUciE4KkqwOQR2NNOzuJq6saddN4A8Qad4Z1ltT1DSm1G4jQ/ZSHC+S56tzxnHGcEjJxXHJfJuImXy/Q8kH/CpftNv/z3h/77Fb8ya3MrNG74q8Rah4n1mbUNTmLFvlihXIjgjzwqj+Z6k8nsBkVD9pg/57w/99ij7TB/z3h/77FO6CzL5uwNDuLHyS8pnW4gk83YI22lWDDadwI28AqQVHPUU2S5jbThZC1doWnink33PzcKyyKCEHDAjbxlcc788UvtMH/PeH/vsUfaYP8AnvD/AN9ijmQrM6O38RKt7qpvNNS7sNTkubia0mmVlinkJ8uaI+XuR0DMpYEFh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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":308}}
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.state = await sky.get_window_state({window:browserWindow,include_screenshot:false,include_text:true}); globalThis.browserWindow = state.window; nodeRepl.write(String(state.accessibility?.tree || state.accessibility?.document_text || ''));",
>   "title": "Reading browser controls"
> }
> ```
>
> ````text
> Window: "New Tab - Google Chrome", App: chrome.exe.
> 	0 window New Tab - Google Chrome Secondary Actions: Raise
> 		1 pane (disabled)
> 		2 pane (region) New Tab - Google Chrome - Vatsal (Your Chrome)
> 			3 pane (region)
> 				4 pane (region)
> 					5 pane (region)
> 						6 button Minimize ID: view_1
> 						115 button Restore ID: view_3
> 						8 button Close ID: view_4
> 					9 pane (region)
> 						10 pane (region)
> 							11 toolbar (tool bar) ID: view_1000
> 								12 button (disabled) Back ID: view_1001
> 								13 button (disabled) Forward ID: view_1002
> 								14 button Reload ID: view_1003
> 								15 group
> 									16 document Search icon ID: view_1011
> 									17 text field (edit) (settable, string) Address and search bar Description: Press tab then enter to ask AI Mode. Press up or down arrow for auto completions. Type to autocomplete.. ID: view_1012
> 									18 pane (region)
> 										19 button AI Mode button, press Enter to ask AI Mode
> 								20 pane (region)
> 									21 button Buyhatke: Price History & Tracker, Spend Lens ID: view_1009
> 									22 button Extensions ID: view_1006
> 								23 pane (region)
> 								24 button Vatsal (Your Chrome) ID: view_1018
> 								25 button Chrome ID: view_1007
> 						26 pane (region)
> 							27 pane (region)
> 								28 pane (region)
> 								29 document New Tab Value: chrome://new-tab-page/ ID: RootWebArea
> 									30 document Value: chrome-untrusted://new-tab-page/one-google-bar?paramsencoded= ID: RootWebArea
> 										31 group (banner) ID: gb
> 											32 text (heading)
> 											33 hyperlink (link) Gmail Value: https://mail.google.com/mail/u/0/?tab=rm&ogbl
> 											34 hyperlink (link) Search for Images Value: https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl
> 											35 group ID: gbwa
> 												36 button Google apps
> 											37 button Google Account: Vatsal Vadgama (vatsalvadgama04@gmail.com), Google membership
> 									38 button Enhance your search with tabs, files, or an AI tool Description: Enhance your search with tabs, files, or an AI tool ID: entrypoint
> 									39 group ID: menu
> 									40 combo box (settable, string) Ask Google Description: Ask Google ID: input
> 									41 button Search by voice Description: Search by voice ID: voiceSearchButton
> 									42 button Search by image Description: Search by image ID: lensSearchButton
> 									43 button Ask AI Mode in Google Search Description: Ask AI Mode in Google Search ID: composeButton
> 									44 button Do more with AI Mode Create, summarize, plan Description: Do more with AI Mode Create, summarize, plan
> 										45 group Description: Do more with AI Mode Create, summarize, plan
> 									46 button Create images Reimagine, illustrate, edit Description: Create images Reimagine, illustrate, edit
> 										47 group Description: Create images Reimagine, illustrate, edit
> 									48 group ID: actionMenu
> 									49 group Description: YouTube
> 										50 hyperlink (link) YouTube Value: https://www.youtube.com/
> 										51 button More actions for YouTube shortcut Description: More actions for YouTube shortcut ID: actionMenuButton
> 										52 text YouTube
> 									53 group Description: ChatGPT
> 										54 hyperlink (link) ChatGPT Value: https://chat.openai.com/
> 										55 button More actions for ChatGPT shortcut Description: More actions for ChatGPT shortcut ID: actionMenuButton
> 										56 text ChatGPT
> 									57 group Description: LEET CODE
> 										58 hyperlink (link) LEET CODE Value: https://leetcode.com/problemset/
> 										59 button More actions for LEET CODE shortcut Description: More actions for LEET CODE shortcut ID: actionMenuButton
> 										60 text LEET CODE
> 									61 group Description: TRANSLATOR
> 										62 hyperlink (link) TRANSLATOR Value: https://www.google.com/search?q=english+to+gujarati&rlz=1C1VDKB_enIN1067IN1067&oq=eglish+to+&gs_lcrp=EgZjaHJvbWUqDwgCEAAYChiDARixAxiABDIGCAAQRRg5Mg8IARAAGAoYgwEYsQMYgAQyDwgCEAAYChiDARixAxiABDIMCAMQABgKGLEDGIAEMgkIBBAAGAoYgAQyDwgFEAAYChiDARixAxiABDIJCAYQABgKGIAEMgYIBxBFGDzSAQg0MjE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
> 										63 button More actions for TRANSLATOR shortcut Description: More actions for TRANSLATOR shortcut ID: actionMenuButton
> 										64 text TRANSLATOR
> 									65 group Description: CodoLio
> 										66 hyperlink (link) CodoLio Value: https://codolio.com/profile/Vatsal30
> 										67 button More actions for CodoLio shortcut Description: More actions for CodoLio shortcut ID: actionMenuButton
> 										68 text CodoLio
> 									69 group Description: Codeforces
> 										70 hyperlink (link) Codeforces Value: https://codeforces.com/profile/23bce359
> 										71 button More actions for Codeforces shortcut Description: More actions for Codeforces shortcut ID: actionMenuButton
> 										72 text Codeforces
> 									73 group Description: TUF
> 										74 hyperlink (link) TUF Value: https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/
> 										75 button More actions for TUF shortcut Description: More actions for TUF shortcut ID: actionMenuButton
> 										76 text TUF
> 									77 group Description: GITHUB
> 										78 hyperlink (link) GITHUB Value: https://github.com/
> 										79 button More actions for GITHUB shortcut Description: More actions for GITHUB shortcut ID: actionMenuButton
> 										80 text GITHUB
> 									81 group Description: NIRMA POD
> 										82 hyperlink (link) NIRMA POD Value: https://nirmauni.pod.ai/d/sXfPHC/opportunities/
> 										83 button More actions for NIRMA POD shortcut Description: More actions for NIRMA POD shortcut ID: actionMenuButton
> 										84 text NIRMA POD
> 									85 button Add shortcut Description: Add shortcut ID: addShortcut
> 									86 button Show less Description: Show less ID: showLess
> 									87 group ID: actionMenu
> 									88 button (toggle button) Customize Chrome Description: Customize this page ID: customizeButton
> 										89 image (graphic) ID: baseSvg
> 										90 text Customize Chrome
> 									91 image (graphic)
> 							92 pane (region)
> 						93 pane (region)
> 							94 pane (region)
> 								95 button Tab search
> 							96 pane (region) ID: view_21
> 								97 tab
> 									98 tab item (selectable) Table Editor | vatsalvadgama05@gmail.com's Project | FairShare | Supabase ID: view_20
> 										116 button Close
> 									99 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access ID: view_20
> 										117 button Close
> 									100 tab item (selectable) Gemini In Antigravity Comparison ID: view_20
> 										118 button Close
> 									101 tab item (selectable) Owino FairShare | Smart Expense Splitting & Debt Minimization ID: view_20
> 										119 button Close
> 									102 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access ID: view_20
> 										120 button Close
> 									103 tab item (selectable) localhost - Network error ID: view_20
> 										121 button Close
> 									104 tab item (selectable) Liquid glassmorphism UI redesign prompt - Claude ID: view_20
> 										122 button Close
> 									105 tab item (selectable) Redesign UI UX Screens - Memory usage - 477 MB ID: view_20
> 										123 button Close
> 									106 tab item (selectable) New Tab - Memory usage - 109 MB ID: view_20
> 										107 button Close
> 								108 pane (region)
> 							109 button New Tab
> 							110 pane (region)
> 							111 pane (region)
> 								112 button Open Gemini in Chrome
> 								113 pane (region)
> 						114 pane (region)
>
> Document text: ```
> ￼
> ￼
> GmailImages  
> ￼  
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> ￼
> AI Mode
> ￼
> Do more with AI Mode
> Create, summarize, plan
> Create images
> Reimagine, illustrate, edit
> ￼
> YouTube
> ￼
> YouTube
> ChatGPT
> ￼
> ChatGPT
> LEET CODE
> ￼
> LEET CODE
> TRANSLATOR
> ￼
> TRANSLATOR
> CodoLio
> ￼
> CodoLio
> Codeforces
> ￼
> Codeforces
> TUF
> ￼
> TUF
> GITHUB
> ￼
> GITHUB
> NIRMA POD
> ￼
> NIRMA POD
> ￼
> Add shortcut
> ￼
> Show less
> ￼
> ￼
> ￼
> Customize Chrome
> ￼
> ```
> ````
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{ const observation=globalThis.state; globalThis.state=null; await sky.click({window:observation.window,element_index:17}); globalThis.state=await sky.get_window_state({window:observation.window,include_screenshot:false,include_text:true}); globalThis.browserWindow=state.window; nodeRepl.write(String(state.accessibility?.focused_element||'')); }",
>   "title": "Focusing the preview address bar"
> }
> ```
>
> Error: user input was detected in this window; call get_window_state before continuing
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.browserWindow=await sky.get_window({id:263808,app:'Chrome'}); globalThis.state=await sky.get_window_state({window:browserWindow,include_screenshot:true,include_text:false}); globalThis.browserWindow=state.window; nodeRepl.write('Current preview state refreshed.');",
>   "title": "Refreshing the preview state"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"Current preview state refreshed."},{"type":"image","data":"/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCANgBgADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5/ooopiCirup6dLpzRR3LILh13vCDlos9A3oe+O3GapUAFFFFABRTolDyKpZUycbm6CkZSrFWBDDgg9qAEooooAKK6K30C1+xNNfai0Mq263TRRW/mbY2KhcncOTuBx6VUn0y0ewuLnTb2S4+z7TKksHlEKTjcPmbPOAenUUAZFFFFABRRV+y04XNpLcy3dvbQo6x5lDnLEEjG1W7A0AUKK3dH8PjUZ40W/t8Okrjy8uy7P7ynBAbtWFQAUUUUAFFFausaP8A2VLLDPf2klzEQGhjEhbn3KBeh9aAMqitCx037Xp13decsfkSRR4YcHeWGSewG30qtPayQxtIdrwiRohIjAhmGM49uRzTAgooooAKKt6VYyanqMFnC8aSTNtVpCQucd8A1LpmlT6jBezRPEkVpH5sjSEjj0GAeaAM+ipryD7NdSw+bFNsbb5kTbkb3B7ioaACiiigAooq5bafLcade3qMgitNm8Encd5wMce1AFOirEto8djBdMV8uZ3RQDyCu3Of++hVvQdK/ta4uIvO8nyoHnzt3Z2446j1oAzKKKKACiiigAooooEFFFFAwooooAKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiikAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooYBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKu6Tpd7q939m063eeYKXIXACqO5J4A5HX1FdvP8PrRBAovtYjkmlSEPPpsIhR3O1d7JcuVG4gZ296APO6KKKACiiigAorT0rRbrVLHULiyKSSWSrLJbg/vWj53Oq9wuBuxyAwPQEiRNH2eG31a9le3EkoisozESLog/vCGzwEBXJ5yWA9cAGRRRRQAVe0TUDpWrW16IUnMLbvLfof8D3B7HFUaKAOk1LUIrYxPbWuk3EEq7lb7PtZfUMuTgiuenk82Z5NqJuYnagwo9gPSmUUAFFFFAFyK4MkioILYEnqVwBTb+6Fx5SqgURjaCBgn/D6VVooAKKKKAO5Gn3WoWd9dWML3EVxpkESGMZO9DEGUj1G0msiDTrrSdH1aTU4JLUzxJBCsqkGRjIrHH0CnP4VztFABRRRQAVuafPHB4bumltYbkG7iG2UuAPkfn5WBrDooA9H8LENY6KQoUGC/OB0HK1Bqc1xb27LZ2S3nhtrHChGCxq3dy2D84bPua8/ooAKKKKYBXf+JrYHxa0l/pPl6f8AaI/MvikuGXC9STsx26VwFFIDvYv7b/si8Gu/as/brfy/P9d53bf9np049KzdVuNRm0i+SCa7kghvpllVHYqkZxgMOy5De1cpRTAKKKKAHRu0ciuhIZSCCOxrr/GMMen2bPZuDBrEousA/dVRkD/vqRvyrjqKAO/1Z9Qhv7yTQFuZLhdQdrtbcEtgAeWGA5Kn5+vGadpWs28enRarJGqtpzyW6Qhs/LIwKjPcKu8dOcV59RQB0njJEsDYaPGQxsYyZHHd3IY8flXN0UUAFdL4dlSHwx4heSCOdR9nzHIWCn5z/dIP61zVFAHc6FLZXB0Rpra1tl8258pMsYzJtj253se/v6Va0SbU5GCaxbTx3EdjdBZrjPmSL8nBB5wOcE+vtXnlFAHqtz9uXWrVpio0H7EPtO7HlH5OQ3+193HfHTvXlVXtX1KbVblJ7hY1dY1jAQEDCjA6k1RoAKKKKACiiigAooooAKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooopAFFFFABRRRQAUUUUAFFFFABRRRTAKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooopAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdL/wn3jH/AKGzxB/4Mpv/AIquaooAvavq+pa1crcaxqF5qFwqCNZbqdpWCgkhQWJOMknHuao0UUAFFFFAHT+Bgk39u2ZntoZrvTWhhNzOkCM/mxNje5CjhW6kdK2dCtZPCWmatd6lcaVIX+zeTDa6pbXDyMlzHIRtidiPlQ8kYrz+igAooooAKKKKANvw3/ZduZNR1WedmtJYmhsrclHuSSSf3v8AyzC7RkgE8jGOo0PFepL4ua6192htb+MRJc2rzjEuRt3wKeQowMxjO3II+XIXlKKACiiigAooooAKKKKACiiigAoo600uAehI/KgB1FN8xf7p/OjzF/un86AHUU3zF/un86PMX+6fzoAdRTfMX+6fzo8xf7p/OgB1FN8xf7p/OjzF/un86AHUU3zF/un86PMX+6fzoAdRTfMX+6fzo8xf7p/OmA6im+Yv90/nR5i/3T+dIB1FN8xf7p/OjzF/un86AHUU3zF/un86PMX+6fzpgOopvmL/AHT+dHmL/dP50AOopvmL/dP50eYv90/nQA6im+Yv90/nR5i/3T+dADqKb5i/3T+dHmL/AHT+dADqKb5i/wB0/nR5i/3T+dADqKb5i/3T+dHmL/dP50AOopvmL/dP50eYv90/nQA6im+Yv90/nR5i/wB0/nQA6imGVR/CfzpPOX+4f++v/rUXAkoqPzl/uH/vr/61HnL/AHD/AN9f/WouKxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRdBYkoqPzl/uH/vr/AOtR5y/3D/31/wDWp3QWJKKj85f7h/76/wDrUecv9w/99f8A1qLoLElFR+cv9w/99f8A1qPOX+4f++v/AK1F0FiSio/OX+4f++v/AK1HnL/cP/fX/wBai6CxJRUfnL/cP/fX/wBajzl/uH/vr/61F0FiSio/OX+4f++v/rUecv8AcP8A31/9ai6CxJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXQWJKKj85f7h/wC+v/rUecv9w/8AfX/1qLoLElFR+cv9w/8AfX/1qPOX+4f++v8A61F0FiSio/OX+4f++v8A61HnL/cP/fX/ANai6CxJRUfnL/cP/fX/ANajzl/uH/vr/wCtRdBYkoqPzl/uH/vr/wCtR5y/3D/31/8AWougsSUVH5y/3D/31/8AWo85f7h/76/+tRdBYkoqPzl/uH/vr/61HnL/AHD/AN9f/WougsSUVH5y/wBw/wDfX/1qPOX+4f8Avr/61K6CxJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXCxJRUfnL/cP/fX/ANajzl/uH/vr/wCtRcLElFR+cv8AcP8A31/9ajzl/uH/AL6/+tRcLElFR+cv9w/99f8A1qPOX+4f++v/AK1FwsSUVH5y/wBw/wDfX/1qPOX+4f8Avr/61FwsSUVH5y/3D/31/wDWo85f7h/76/8ArUXHYkoqPzl/uH/vr/61HnL/AHD/AN9f/WouBJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXCxJRUfnL/cP/fX/ANajzl/uH/vr/wCtRcCSio/OX+4f++v/AK1HnL/cP/fX/wBai4ElFR+cv9w/99f/AFqPOX+4f++v/rUXAkoqPzl/uH/vr/61HnL/AHD/AN9f/WouBJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXAkoqPzl/uH/AL6/+tR5y/3D/wB9f/WouBJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcCSio/OX+4f++v8A61HnL/cP/fX/ANai4ElFR+cv9w/99f8A1qPOX+4f++v/AK1FwJKKj85f7h/76/8ArUecv9w/99f/AFqLgSUVH5y/3D/31/8AWo85f7h/76/+tRcCSio/OX+4f++v/rUecv8AcP8A31/9alcCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSimLKrHB+X9afQAVPDbNIu4naO3HWoK16AKf2P8A6afpR9j/AOmn6VfgiknmjhgjeSWRgiIilmZicAADqTWz4o8Ja74Wa3XX9NmsvtCloi5BD4xnBBIyMjI6jNAHLmzOOH5+lVWBUkEYIrWqlfjDq3qMUAU5CQo9CaiqST7i/U/0qOgAopQCSABkntWnq3h7WdHjSTVtJv7KN+Fa4t3jBPpkjrQBl0UUUAFFTtaXKWaXbW8y2sjmNJihCMwAJUN0JGRx71BQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFKqlmCqCWJwAO9B4OD1oASiiigAooooAKKKKAGv2ptOftTaQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoq5ZRAguwB5wM1coAx6K2Kp3sQADqMc4NAFOiiigAooooAKsRNuQA9RVepYe9AE1a9ZFa9MR9a/s2eFbLSvBEOuKu/UdVDGSRhykauyqi+g4yfUkZ6CvVNSsLXU7Cey1C3juLSddkkUi5VhXzV8NfjhZ+FvB1not/o9xPJZhljlhlUCQFmYZBHy4zjv61znwU+Jdp4Aj1iPULS7u47wxNGsLABCu/ccE99y/lQM4TxbpaaJ4p1fS4pDJHZ3ctursMFgrEAn8q53UP4Px/pW94n1U654j1TVTD5H225ku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BAL5Y9MnpjrQByMQRpUErFIyQGYDJA7nHet/WPC9xommvdas7RNLIEsPLj3x3qDl5FfIwigpzg5LY4KtjnaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr1b4T6xceFW8XWD6XB/aEVhcm8F5GsmRFtHkbSMqNxffyd2E6befKa7bXfEnhjX9VudV1Pw5qkeoXbma5+xavHFE8rcu6o9u5XJJONx60Acte2rCH7fBbSw6bPcSxW5kcOQU2sULADJVZEycDOelUq6PxJrthf6RpelaNpcun2Fi8037+5FxLLLLsDMzBEHSJAAFHSucoA0rP/j3T8f516f4i8Vtf+AYrRtMv47GSC3trVJIgLW2khPzzRSDG95MtuG0Y38lsCvLrFgYcdwa73V/HI1Dw5PYJpvlXt3bWtndXRuCyPHb42bI9oCE7VyckcHAGTQBn6vreg3enzw2HhS2sLlyClwl7PIY8HJAVmIORxzXKXn/Hu34fzrrNY8ca9rFhPZahcWr2023esdhbxHg5GGRARyB0NcjfNiHHdjQBn10nhrxPrHhnS746FeyWM15LGsk8PyyhUDHaH6gEsCQOu0Vzdb/hvVtJsrO9tNd0aXU4J3jkjaG7+zSQsu4cNscEENyCOw9KAO68I+N/Fl3pOt6peeJdVuTpYtnW1nm8yGcSTqjLIjA7l2k8V5TMoSaRBnCsQM13Wl+K/CmlTebY+FtVJ3K7Qza7uhlKsGUSIsClgGAOMjpXBkkkkkknkk0AJUsP8VRVLD/FQBNWhBcLIMNhW/nWfRTEa9FZFFAGq7qgyzAVnXEvmvnGB0AqOigBkn3F+p/pUdSSfcX6n+lR0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UdKKAGydqZT5O1MpDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHxyNG2UOKsi9PdB+dU6KALhvT2T9arSSNIcuc0yigAooooAKKKKACpYf4qiqWH+KgCaiiimIKK6LQPDVzdT2lxqKLbaY7gvLNIse5RycAkHn1FX9Zv57HyXvLLw9fQSlgj26AgbcZXKkEdR1/xoA46itjxRZwWeoRG1QxRXFvHceSSW8ouM7cnrj1rHoAZJ9xfqf6VHUkn3F+p/pUdABRXVfDqC3fWb25ubaG6+w6fc3kcU67o2kjjJTcvcA4OD1xXVaZY3EjR65rpsm1G4sxdNdTwIsGmQE7Y5XiVdssr4bYnHRSQ27AAPK6Kva5eW+oaxeXdlZpY280hdLZG3CMHsDgD8gB6AV2nwq0XQNTsPEt14mtpJbexto5FkjkZWh3MQXAU/MQOcHOcUAee0V2LeEri0stesLy0La3aahaWkQVjz5nm8DsQ21CCf0zUln8PbzULxbbTNX0e9YySwlopJQoljXd5fzRjJYbipGVO1ueKAOKorsbP4e6xdjw+UktFXWo5pYCzsPKSMAs0ny8DBGMZrI8O+HbnXIr64Se1s7GxjElzd3TlY4wchR8oLFmIwAASTQBi0V3h8IQy6DboNa0KIx6lLbm9MjlJy8VuUVSsZYgZfOQApJzjNY+jeFJtS1E6dNqemadqH2lrRLe7kcM8oOCPkRgOSACxAJ6ZwcAHN0V1/iLwxp+meDNC1e21aG4ur5phJGok2tsZQNmYxjbn5tx5ONuRXIUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUgClpKWgApaKKYDJO1Mp8namUhhRRRQAUUUUAFFFFABRRR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…114366 chars truncated…gArQ8P6ZJrOtWenxHDTyBSfQdSfwAJrPooA7i3n/wCEwHiVGDLduRf2sYGeIwVKfUqVH4Vta99iPia+/tQqLL+2ofN3fdx5Ldfb1ry2igD0e11LVNHikvvFoujfQ30bWQugckfMJwn+xtK9PlztxWta6ZZ6d5dtM6yjwwPtkzbeZHkDsVx2wVj9a8iooA6vwTLDNY63pDTRwXOoQotu8jBVLq2dhJ6bs8fSrPg7SLrTtY36pZfZbmSCVdPF/HsV7kbduA3XrwfXHeuLooA9S0RLuSXR18S5OsBbo2Ivv9ZuwmzzN3P3t23P4dqdp32lpfDA8VnN2Hu/JF797ftj8sSbuevTd7e1eV0UAep6FPrsgt08R2lxFYRW9wt9cXu4NLAduAwIzkHO0nrk46GuX8fS6lbeKTJK5ijQKbF4CVVYf4Ch7cdffNcpRQB67rY1o6p4mNqbltQ/dnTixJfyTnzfs+fbbnZz+Ncj8QipfSvtWz+2/swGobcZ3fw78cb8de/SuQooA9fvrGf+1fGWp7R9hutLL28wOVlBjHKnvjHPpx6iqErTXfiOzl8SxXGn6e14I49OviGhG2NgGjJAGwNtBAXHzLye3l9FAHSeJ59bfTrKHxHbXgnSaUxT3WQ7KQuVwRkgHBB6ckCtjXUfXJNL1XSdNGqxfY1t5rREkf7O6cYbyyCM5yDwDg1wdFAHod7bXlm13B4G+15j1CRLkWTFmVQAIgSOSv8ArepxnOe1Go/aWk1dvAnneX9txP8A2eCH2bF2bdvOzf5vTjp7V55RQB6bq4uDcas/gfzzMbuMXX2D02cbdv8ABv8AMz2454xUviYQHXfEovSotTqGneae2zY279M157puoRWaMs2m2V7lgwNx5mV9vkdcj2OarX13Pf3k11eStLcSsXd26k0AdN4rm10W1zF4ltbhnNyGtppSQkfB3rECPmQjb0OBtHrUmoRT+IfC2hjSLSa5l09Xt7mGBC7IScqxAGcMAecdRjNcdRQB132rVfDWgfZ4ZXsrxdQdZTGw3DCRnbuHb1HfHNXvE1y2jC6sLCWWztJNWuBJ5DFDsCRZXjt8x46cDiuDooA9N1M3qWniceJP+QZsA04OB5e/nyvs+OMbeu3t1rR1jVbzzfG7CUg2Jh+y4GPILblZk/usQxyw55ryGigD1nxFHqAutUm0CPGqzWtnJI1uMTlCH3lMc8kR5xWG95ex6t4h1PT9Citb6CJfMcTo32Nj991GACzc9OV5rgqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDY8Pf8vH/Af61Sm/4/Ln/rof5mrvh7/l4/4D/WqU3/AB+XP/XQ/wAzQAUUUUAFFFFABRRRQAyT7i/U/wBKjqST7i/U/wBKjoAKKKKACiiigAooooAKKKKACiiigAqxY3t1YT+dY3M9tNtK+ZDIUbBGCMjsar0UAFFFFABRRRQAUUUUAFFFFABRRRQBqWHiHWtOs2tNP1fUbW1bJaGC5dEOeuVBxzWXRRQAUUUUAWYr67isprOK6nSzmYNLAshEchHQsvQkds1WoooAKKKKACiiigAooooAa/am05+1NoAKKKKACiiigAooooAKKKkt4mnnjiT7zsFH40ADwyRojyRuqOMqzKQG+nrUddHqKJqNvdvBcQuLZg8aIG+VMbT1A9AeM1AtraT6p/ZyW5h2vt84uS7bc546c49OPegDDorb0+GzvUuJ3t4oVt13bQ8m188Dd1PGD0657VLJBpgtLq6t41n8sR/uwzhUY5B5OCR0/wAaAOforq4Ibe2tbqaGFQk9mJTEzMQvPTOQcH86rTWOmWqJBcyIHaIP5uZC+49MADbj8aAMO1tprqQpAm9gpYjIHA69ahrq9Pit7XVbq0it8PFA374uSW45yOmORXKUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFF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Xyx6+s422Itj9mUfc2dtnbGMZx7ZrF8LyXX9l6xFZPN55RGRYmO7ryQBWZNqrtBPFb29varOQZfJDDeBzjljgc9Bis6gD0Fp5JtaNhIQbRrDLR44J29T78CqOpyXEKTLBarcaE1qPLCELGp4+bOPv7s8dTXGUUAdF4cF3/Y+rf2fu+05h27Pv8A8edvfOM9Oa1Ly/C6ReXNrMhvWgtvOnhYcud2SCO+O/vXIxXckVlcWyhTHOUZiRyNucY/Ovor4m/BU6x4M0nxT4Otl/tT+zoJL2wjXH2v92v7xP8App1yP4/r94A8hvpZ4IiLS1FzoZtPlCMFRWHVi398N+NOmmS2ngurXhdYmifHdNrZcfiSK4hSGAKnIPeloA622a6igtJNHiklk+0Sfa0iH3vm+UP/ALOM4zxyau2Op2n2WzvpkBnnA09xnO1c8sfwIrhaKANzxFIP7Vhs4l3RWarAqk8MR1/M1uafPqC63YS3c17AlxLMBbXDEbRtGMHjIyRjgYxxXD0UAd14bt7xJbN5pbqVZpH89S2xY26ES5BLk8YBx7VHpszXNloTXkrywBplYysWTzAf3YfPH0zXE0UAa+syag9nZpqkM6yoZAss+d7g7TjnnA9ff2qhY2xu7uOASRRbzzJK21VA5JJ+lV6KAL+tXsd/eCaOIo2wLI7EZlYdXIHAJ9B+ZPNUKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDY8Pf8ALx/wH+tUpv8Aj8uf+uh/mau+Hv8Al4/4D/WqU3/H5c/9dD/M0AFFFFABRRRQAUUUUAMk+4v1P9KjqST7i/U/0pgGTQAlFJvx0H4mjzH/ALx/CgBaKbvf+8350b3/ALzfnQA6im73/vN+dG9/7zfnQA6im73/ALzfnRvf+8350AOopu9/7zfnRvf+8350AOopu9/7zfnRv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63maZ5JvMyIUjuFOxggYO8jYwQA2eADxuivQfFWmaP4c8MtDFpUN3fTarf2S31xNKHijgMYUhUZULfPnJBHt6efUAFFFFABRRRQAUUUUAFFFFAHsvw4+Aes+MfD0Wsz6la6baXALWwK+c8g/vEAgKM8dc8HivPvHvg3V/A+utpeuQqku3fFLGcxzJ/eU9/T1FfSXhTxFceGbx7uyjS7srpAqmQnZcJ/y6/6UeM7fMUMyg5AR8YR6479rfxDpOuN4QXSL+C7KQ3Fw3lHO1JPK2E+hOxuOoxyBQB89U5O9Npyd6AB+1Npz9qbQAUUUUAFFFFABRRRQAVY0/8A4/YvrVerGn/8fsX1oA3qKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKhvP+PSb/AHamqG8/49Jv92gDn6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDY8Pf8vH/AAH+tUpv+Py5/wCuh/mau+Hv+Xj/AID/AFqlN/x+XP8A10P8zQAUUUUAFFFFABRRRQAyT7i/U/0qN/uL9T/SpJPuL9T/AEqN/uL9T/SgCOlBIIIJBHIIpKKALV5qF5eqgvLu4uAn3RLIWC/TPSqtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBYs726sZRJZXM9vIM4aKQoRkYPI9QSKgJJJJJJPJJpKKACnJ3ptOTvQAP2ptOftTaACiiigAooooAKKKKACrGn/8fsX1qvVjT/8Aj9i+tAG9RRRQAUUYOM449aKACiiigAoqxa2V1dq7WttPOsf3zHGWC/XHTpVegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":140}}
> ```
>
> </details>
>
> The main animation pass is complete. The preview step hit a local environment limitation: the dev server couldn’t bind to localhost, and the browser window handle stopped matching Chrome, so I stopped the UI preview rather than risk interacting with the wrong app. I’m making one final cleanup to the run notes and motion fallbacks.
>
> <details><summary>Edited 3 files</summary>
>
> - Wrote `./README.md` (+7 -1)
> - Wrote `./index.html` (+1 -0)
> - Wrote `./app.js` (+6 -2)
> - Wrote `./index.html` (+1 -1)
>
> </details>
</details>

Implemented a motion and storytelling pass across the portfolio:

- Added a staged hero reveal, parallax orbit, scroll progress line, and chapter rail that follows the active section.
- Connected Lenis to GSAP ScrollTrigger so project scenes and the journey timeline respond to scroll while respecting reduced-motion preferences. [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) · [Lenis setup and reduced-motion behavior](https://github.com/darkroomengineering/lenis)
- Added subtle project-card glow and hover treatments inspired by [React Bits](https://reactbits.dev/) and [Magic UI](https://magicui.design/docs/components), while keeping the site framework-free.
- Updated the run notes in [README.md](</E:/portfolio/README.md>) and kept GSAP and Lenis pinned to specific CDN versions.

The changes are in [app.js](</E:/portfolio/app.js>), [index.html](</E:/portfolio/index.html>), and [styles.css](</E:/portfolio/styles.css>). I couldn’t complete a browser preview because this environment denied the local server port, so the updated motion hasn’t had a live visual pass here.

> what heepned my whole screen even in each app and tab and even in this gpt app there is yellowishes bordeer ? why remove it ? also for more content  and better images of project and mine find from this old repo folder .  and navbar and that right side dots are not good as now cause navabr must be at top and non sticky and remvoe these dots from right side these are unessary . also properly habdling repsonsivenss in mobiel and other devices.&#x20;
> E:\Resume_PortFolio&#x20;
> use that fodleer and find relavnt deatils of mine and projects . also add contact form to direct message to my mail . still more effect , animation and effect and story telling native whole site flow needed .
>
> User context
>
> Images:
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-c6fe5c2a-8ecb-4e98-9ced-59d07eb1f138.png`

<details><summary>13 previous messages</summary>

> That screenshot looks like the portfolio itself, and it doesn’t show a desktop-wide yellow border. I didn’t intend to change Windows appearance or app settings; I’ll check the current app state carefully before touching any system setting. I’ll also inspect `E:\Resume_PortFolio` for your original content and project imagery, remove the sticky header and right-side dots, improve the responsive layout, and add a real contact form flow.
>
> <details><summary>Ran 6 commands</summary>
>
> - Ran `rg --files 'E:\portfolio' | Select-Object -First 100; rg -n 'chapter-nav|position:sticky|outline|box-shadow|border|mailto|contact' index.html styles.css app.js | Select-Object -Last 100`
> - Ran `Get-ChildItem -Force 'E:\' | Where-Object Name -in 'AGENTS.md','.agents'; Get-ChildItem -Force 'E:\Resume_PortFolio' -Filter AGENTS.md -Recurse -Depth 2 | Select-Object FullName`
> - Ran `Get-ChildItem -Force 'E:\Resume_PortFolio' | Select-Object Name,Mode,Length; rg --files 'E:\Resume_PortFolio' -g '!node_modules' -g '!dist' -g '!build' | Select-Object -First 300`
> - Ran `Get-Content src/index.css | Select-Object -First 140; Get-Content src/main.jsx; Get-Content src/components/Navbar.jsx`
> - Ran `Get-ChildItem src/assets -File | Select-Object Name,Length; rg -n 'GitHub|github|portfolio|mailto|linkedin|Vixora|Aura|soil|Chemicrown|follower|views|years|3D|motion|border|scroll|@media|position: fixed|cursor|outline' src index.html`
> - Ran `Get-Content src/App.jsx; Get-Content src/components/Hero.jsx; Get-Content src/components/About.jsx; Get-Content src/components/Experience.jsx; Get-Content src/components/Projects.jsx; Get-Content src/components/Contact.jsx; Get-Content package.json`
>
> </details>
>
> Viewed 6 images
>
> <details><summary>Ran a command</summary>
>
> - Ran `Get-Content src/components/Projects.jsx; Get-Content src/components/Contact.jsx; Get-Content src/components/CustomCursor.jsx; Get-Content src/components/ParticleBackground.jsx; Get-Content src/components/Meteorites.jsx; Get-Content package.json; Get-Content index.html;`
>
> </details>
>
> Viewed 4 images
>
> <details><summary>Ran 2 commands, searched the web</summary>
>
> Searched the web for `site:formsubmit.co/documentation ajax form email formsubmit official ...`
>
> - Ran `$lines=Get-Content index.html; $lines[45..69]`
>
> - Ran `New-Item -ItemType Directory -Force -Path 'E:\portfolio\assets\projects' | Out-Null; Copy-Item -LiteralPath 'E:\Resume_PortFolio\src\assets\pod_profile_image_1_transparent.png' -Destination 'E:\portfolio\assets\vatsal-portrait.png' -Force; Copy-Item -LiteralPath 'E:\Resume_PortFolio\src\assets\project2.png' -Destination 'E:\portfolio\assets\projects\vixora-dashboard.png' -Force; Copy-Item -LiteralPath 'E:\Resume_PortFolio\src\assets\soil_analysis.png' -Destination 'E:\portfolio\assets\projects\soil-analysis.png' -Force; Copy-Item -LiteralPath 'E:\Resume_PortFolio\src\assets\chemicrown-cdms-project.png' -Destination 'E:\portfolio\assets\projects\chemicrown-cdms.png' -Force; Copy-Item -LiteralPath 'E:\Resume_PortFolio\src\assets\elevara.png' -Destination 'E:\portfolio\assets\projects\elevara.png' -Force; Copy-Item -LiteralPath 'E:\Resume_PortFolio\src\assets\project3.png' -Destination 'E:\portfolio\assets\projects\bookit.png' -Force; Get-ChildItem -Recurse assets | Select-Object FullName,Length`
>
> </details>
>
> I found the old portfolio’s real profile photo and screenshots for Vixora, ChemiCrown CDMS, soil analysis, Elevara, and Bookit. I’m bringing those into the current site, adding the extra builds as a secondary project set, and using the resume as the source of truth when old repo stats conflict. I also confirmed the yellow frame isn’t coming from a viewport-wide border in this portfolio’s CSS.
>
> <details><summary>Edited a file</summary>
>
> - Wrote `./index.html` (+10 -15)
>
> </details>
>
> Context compaction
>
> Source: automatic
> Status: completed
>
> I’ve found the old project screenshots and your portrait in `E:\Resume_PortFolio`. I’m applying the page changes now: the header will scroll away normally, the side dots will go, and the new project imagery and contact form will fit the existing visual style.
>
> <details><summary>Edited 3 files, ran 3 commands</summary>
>
> - Ran `Get-Content index.html -Raw; Get-Content app.js -Raw; Get-Content README.md -Raw`
> - Ran `Get-Content styles.css | Select-Object -Last 18; Get-ChildItem assets,assets\projects | Select-Object FullName,Length`
> - Wrote `./app.js` (+58 -29)
> - Wrote `./index.html` (+1 -1)
> - Ran `Select-String -Path styles.css -Pattern '\.contact-main|\.mini-project|\.project-image|\.orbit-core' | ForEach-Object {$_.Line.Substring([Math]::Max(0,$_.Line.IndexOf($_.Matches[0].Value)-60),[Math]::Min(420,$_.Line.Length))}`
> - Wrote `./README.md` (+4 -2)
> - Wrote `./app.js` (+1 -1)
> - Wrote `./index.html` (+1 -1)
>
> </details>
>
> The old repo’s images are now in the project, and I’ve expanded the work section with ChemiCrown, Elevara, Bookit, and the P2P project alongside the selected builds. I’m finishing the responsive styling and wiring the contact form to your resume email; sending through the form provider will require its one-time email activation.
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `@'
>
> /* Portfolio refinements: normal-flow navigation, real project imagery, and contact */
> html{scroll-behavior:auto;scroll-padding-top:16px}
> .site-header{position:relative;top:auto;background:transparent;backdrop-filter:none;-webkit-backdrop-filter:none}
> .chapter-nav{display:none!important}
> .orbit-core{width:205px;height:252px;border-radius:48% 48% 8% 8%;overflow:hidden;display:block;background:#22271c}
> .orbit-core img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 18%;filter:saturate(.78);}
> .project-visual{min-height:400px;aspect-ratio:1.2;background:#151813}
> .project-visual .project-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .8s cubic-bezier(.2,.75,.25,1),filter .5s;filter:saturate(.82) brightness(.78)}
> .project-card:hover .project-visual .project-image{transform:scale(1.035);filter:saturate(1) brightness(.92)}
> .project-visual:after{content:"";position:absolute;inset:35% 0 0;background:linear-gradient(transparent,#111310b8);pointer-events:none}
> .project-image-label{position:absolute;z-index:2;left:18px;right:18px;bottom:15px;display:flex;justify-content:space-between;gap:10px;font:9px var(--mono);letter-spacing:.1em;color:#f2f0e8}
> .project-image-label i{font-style:normal;color:#d9e3c6}
> .other-work{margin-top:92px}
> .other-work-heading{display:flex;justify-content:space-between;padding-bottom:18px;border-bottom:1px solid var(--line)}
> .other-work-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:18px}
> .mini-project{min-width:0;background:#111310;border:1px solid #292d26;overflow:hidden;transition:border-color .35s,transform .35s}
> .mini-project:hover{border-color:#79865588;transform:translateY(-3px)}
> .mini-project-image,.mini-project-art{width:100%;height:230px;display:block;object-fit:cover;object-position:top center;background:#191d17}
> .mini-project-art{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:12px;padding:30px 12%;font-family:var(--mono);overflow:hidden}
> .mini-project-art:before,.mini-project-art:after{content:"";position:absolute;border:1px solid #c8f16932;border-radius:50%;width:250px;height:250px;right:-8%;top:-25%;box-shadow:0 0 50px #c8f1690c}
> .mini-project-art:after{width:175px;height:175px;right:1%;top:-7%;border-color:#c8f16952}
> .mini-project-art span,.mini-project-art b,.mini-project-art i,.mini-project-art small{position:relative;z-index:1}
> .mini-project-art span,.mini-project-art small{font-size:9px;letter-spacing:.1em;color:#aab69c}
> .mini-project-art b{font:500 30px var(--display);letter-spacing:.06em;color:#e5f4cd}
> .mini-project-art i{font-style:normal;font-size:12px;color:var(--lime)}
> .mini-aurapass{background:radial-gradient(ellipse at 70% 30%,#245244,#172b27 48%,#111613)}
> .mini-aurapass:before,.mini-aurapass:after{border-color:#72d4a333;box-shadow:0 0 48px #57d39c12}
> .mini-p2p{background:radial-gradient(ellipse at 25% 70%,#37415b,#191c28 53%,#111310)}
> .mini-p2p:before,.mini-p2p:after{border-color:#a8b8ff32;box-shadow:0 0 48px #808fff12}
> .mini-project-copy{padding:22px 24px 26px}
> .mini-project-copy>span{font:9px var(--mono);letter-spacing:.09em;color:var(--muted)}
> .mini-project-copy h3{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:12px 0 6px;font:650 25px var(--display);letter-spacing:-.05em}
> .mini-project-copy h3 button{border:0;background:none;color:var(--lime);font-size:18px;cursor:pointer}
> .mini-project-copy>p{min-height:52px;margin:0;color:#a5a89f;font-size:13px;line-height:1.7}
> .mini-project-copy .tag-row{margin-bottom:0}
> .contact-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:8%;align-items:start;padding-top:55px}
> .contact-main{position:relative;padding:15px 0 30px}
> .contact-main h2{font:700 clamp(48px,6vw,76px)/1.08 var(--display);letter-spacing:-.075em;margin:0}
> .contact-main h2 em{font-style:normal;color:var(--lime)}
> .contact-main>p{max-width:420px;margin-top:24px}
> .contact-spark{position:absolute;right:10%;top:-5%;font-size:72px;color:var(--lime)}
> .contact-extra{align-items:flex-start;flex-direction:column;gap:9px}
> .contact-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 14px;padding:25px;border:1px solid var(--line);background:linear-gradient(145deg,#171a16,#121410)}
> .contact-form label{display:flex;flex-direction:column;gap:8px;font:10px var(--mono);letter-spacing:.06em;color:#c3c7ba}
> .contact-form input,.contact-form textarea{width:100%;min-width:0;border:1px solid #383d33;background:#10120f;color:var(--text);border-radius:0;padding:13px 14px;font:13px var(--sans);letter-spacing:0;outline:none;transition:border-color .2s,box-shadow .2s}
> .contact-form textarea{resize:vertical;min-height:132px;line-height:1.65}
> .contact-form input::placeholder,.contact-form textarea::placeholder{color:#676d60}
> .contact-form input:focus,.contact-form textarea:focus{border-color:var(--lime-dark);box-shadow:0 0 0 2px #c8f16920}
> .contact-form .form-wide{grid-column:1/-1}
> .form-honey{position:absolute!important;width:1px!important;height:1px!important;left:-10000px!important;opacity:0!important}
> .form-submit{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
> .form-submit .button{border:0;cursor:pointer}
> .form-submit .button:disabled{opacity:.65;cursor:wait}
> .form-status{margin:0;color:var(--muted);font-size:11px;line-height:1.6}
> @media(max-width:1000px){.contact-layout{grid-template-columns:1fr;gap:24px}.contact-main{max-width:700px}.project-visual{min-height:330px}.mini-project-image,.mini-project-art{height:205px}}
> @media(max-width:700px){
>   html{scroll-padding-top:8px}
>   .hero-decoration{width:250px;height:250px;right:-25%;top:30%;opacity:.25}
>   .orbit-core{width:126px;height:164px}
>   .project-visual{min-height:0;aspect-ratio:1.15}
>   .project-visual .project-image{object-fit:cover}
>   .project-image-label{left:11px;right:11px;bottom:10px;font-size:7px}
>   .other-work{margin-top:64px}
>   .other-work-heading{gap:12px}.other-work-heading .eyebrow{font-size:7px}
>   .other-work-grid{grid-template-columns:1fr;gap:12px;margin-top:13px}
>   .mini-project-image,.mini-project-art{height:210px}
>   .mini-project-copy{padding:18px 18px 21px}
>   .mini-project-copy h3{font-size:23px}
>   .mini-project-copy>p{min-height:0;font-size:12px}
>   .contact-layout{padding-top:35px;gap:25px}
>   .contact-main{padding:24px 0 10px}
>   .contact-main h2{font-size:clamp(50px,12vw,72px)}
>   .contact-spark{right:2%;top:0;font-size:53px}
>   .contact-form{grid-template-columns:1fr;gap:15px;padding:18px}
>   .contact-form .form-wide{grid-column:auto}
>   .form-submit{align-items:flex-start;flex-direction:column;gap:12px}
>   .contact-form input,.contact-form textarea{font-size:16px}
> }
> @media(prefers-reduced-motion:reduce){.mini-project,.project-visual .project-image{transition:none!important}}
> '@ | Add-Content styles.css`
> - Ran `git status --short; git diff --stat; Get-Content app.js | Select-Object -First 115; Get-Content app.js | Select-Object -Last 45; Select-String -Path index.html -Pattern 'chapter-nav|contact-form|contact-layout'; Select-String -Path styles.css -Pattern 'position:sticky|chapter-nav' | Select-Object -Last 6`
> - Ran `Select-String -Path index.html -Pattern 'site-header|project-card project-vixora|other-work-grid|contact-layout'; Select-String -Path app.js -Pattern 'chemicrown:|const contactForm|anchors:'; Select-String -Path styles.css -Pattern 'Portfolio refinements'; Get-ChildItem assets\projects | Select-Object -ExpandProperty Name`
>
> </details>
</details>

Updated the portfolio in [index.html](./index.html), [styles.css](./styles.css), and [app.js](./app.js).

The header now scrolls away normally, the right-side chapter dots are hidden, and the hero and project cards use your portrait and screenshots from `E:\Resume_PortFolio`. I added project cards and details for ChemiCrown, Elevara, Bookit, and Secure P2P, plus responsive layouts for smaller screens and entrance effects for the added work.

The contact form is set up to forward messages to **vatsalvadgama05@gmail.com**. FormSubmit requires you to confirm its activation email after the first submission before forwarding messages ([setup](https://formsubmit.co/), [AJAX form docs](https://formsubmit.co/ajax-documentation)). I haven’t sent a test message.

About the yellowish border: the portfolio can only style its own webpage; it cannot add a border to other apps or the GPT app. The supplied screenshot doesn’t identify what’s causing a border across apps, so I haven’t changed system-wide settings. I also haven’t run a browser or device preview.

> good amazing work but still not completed . cause this is only base version . you really not check all the screens navigation and pages of this site ([https://sarthak-sharma-portfolio-six.vercel.app/](https://sarthak-sharma-portfolio-six.vercel.app/)) using yoour mcp server accees it and proper check each and every components , animation of story telling . effect  , 3d objects (not hard coded like current we have ) . pure polished form . tell me you can get access of that site like i do ? or should i provide all the screnshots of screens ? currently theme or color schema is good just more pages  , componens and way of showing content on screen is needed to improve. images of project cant fittling proprely. also navbr must be sticky but on down scroll it disapera and on upscroll it apper . so when user explore down no anoying navbar and on going upwrard see navabar . so diesgn it like senior pro level ui/ux deisgneer and acrhtect . means all aniamtion , motion , effect should be feel by user .
>
> User context
>
> Images:
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-6adedc41-79a3-4321-957b-ba8664142501.png`

<details><summary>10 previous messages</summary>

> I can access the public reference site directly; screenshots aren’t required to begin. I’ll inspect its live sections and interactions, then compare that with your current portfolio—screenshots would only help if there are states the public page hides, such as hover, mobile, or loading behavior.
>
> <details><summary>Ran a command, searched the web</summary>
>
> - Ran `Get-ChildItem -Force | Select-Object Name,Mode,Length; Get-Content index.html -Raw; Get-Content app.js -Raw; Get-Content README.md -Raw`
>
> Searched the web for `https://sarthak-sharma-portfolio-six.vercel.app/`
>
> </details>
>
> The public page is reachable, and I can read its full section content. To inspect the visuals and scroll behavior closely, I’m also applying the `computer-use` skill to open and navigate the live reference in a browser; I can start without screenshots from you.
>
> <details><summary>Ran a command, called 6 tools</summary>
>
> <details><summary>Explored a file</summary>
>
> - Read `C:/Users/VATSAL/.codex/plugins/cache/openai-bundled/computer-use/26.1111.21308/skills/computer-use/SKILL.md`
>
> </details>
>
> - Ran `Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\guidance.md' -Raw; Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\confirmations.md' -Raw; Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\api.md' -Raw`
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "if (!globalThis.sky) {\n  const { sky } = await import(\"@oai/sky\");\n  globalThis.sky = sky;\n}",
>   "title": "Preparing browser inspection"
> }
> ```
>
> ```text
>
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.apps = await sky.list_apps();\nnodeRepl.write(JSON.stringify(apps.map(({id,displayName,windows})=>({id,displayName,windows})),null,2));",
>   "title": "Finding the browser window"
> }
> ```
>
> ```text
> [
>   {
>     "id": "Chrome",
>     "displayName": "Google Chrome",
>     "windows": [
>       {
>         "app": "Chrome",
>         "id": 263808,
>         "title": "Vatsal Vadgama — Software Engineer - Google Chrome"
>       }
>     ]
>   },
>   {
>     "id": "OpenAI.Codex_2p2nqsd0c76g0!App",
>     "displayName": "ChatGPT",
>     "windows": [
>       {
>         "app": "OpenAI.Codex_2p2nqsd0c76g0!App",
>         "id": 133404,
>         "title": "ChatGPT"
>       }
>     ]
>   },
>   {
>     "id": "Brave",
>     "displayName": "Brave",
>     "windows": [
>       {
>         "app": "Brave",
>         "id": 201742,
>         "title": "Sarthak Sharma | Product Builder & Technical Educator - Brave"
>       }
>     ]
>   },
>   {
>     "id": "Microsoft.WindowsNotepad_8wekyb3d8bbwe!App",
>     "displayName": "Notepad",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\VideoLAN\\VLC\\vlc.exe",
>     "displayName": "VLC media player",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{51325390-AE6A-68FC-A315-0950CC83A166}",
>     "displayName": "VLC media player - reset preferences and cache files",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{30BD9A02-CB9A-93FD-A859-09C8803F2346}",
>     "displayName": "VLC media player skinned",
>     "windows": []
>   },
>   {
>     "id": "Claude_pzs8sxrjxfjjc!Claude",
>     "displayName": "Claude",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Steam\\Steam.exe",
>     "displayName": "Steam",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Samsung\\Samsung Magician\\SamsungMagician.exe",
>     "displayName": "Samsung Magician",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.POWERPNT.EXE.15",
>     "displayName": "PowerPoint",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\POWERPNT.EXE",
>     "displayName": "PowerPoint 2013",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.WINWORD.EXE.15",
>     "displayName": "Word",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\WINWORD.EXE",
>     "displayName": "Word 2013",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\MySQL\\MySQL Workbench 8.0\\MySQLWorkbench.exe",
>     "displayName": "MySQL Workbench 8.0 CE",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\services.msc",
>     "displayName": "Services",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{C2A4A863-0656-6D2C-6664-92F1631676F8}",
>     "displayName": "Blackmagic Proxy Generator Lite",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Blackmagic Design\\DaVinci Resolve\\Resolve.exe",
>     "displayName": "DaVinci Resolve",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.VisualStudio.Installer",
>     "displayName": "Visual Studio Installer",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\msinfo32.exe",
>     "displayName": "System Information",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Cloudflare\\Cloudflare WARP\\Cloudflare WARP.exe",
>     "displayName": "Cloudflare One Client",
>     "windows": []
>   },
>   {
>     "id": "com.squirrel.Discord.Discord",
>     "displayName": "Discord",
>     "windows": []
>   },
>   {
>     "id": "AcrobatReader",
>     "displayName": "Adobe Acrobat",
>     "windows": []
>   },
>   {
>     "id": "{F38BF404-1D43-42F2-9305-67DE0B28FC23}\\regedit.exe",
>     "displayName": "Registry Editor",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\cleanmgr.exe",
>     "displayName": "Disk Cleanup",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\GRETECH\\GOMPlayer\\GOM.EXE",
>     "displayName": "GOM Player",
>     "windows": []
>   },
>   {
>     "id": "AdvancedMicroDevicesInc-2.AMDRadeonSoftware_0a9344xs7nr4m!AMDRadeonsoftwareUWP",
>     "displayName": "AMD Software",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{C17D49BC-3948-20AC-2799-FD5933B521F5}",
>     "displayName": "About Java",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.MSACCESS.EXE.15",
>     "displayName": "Access",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\MSACCESS.EXE",
>     "displayName": "Access 2013",
>     "windows": []
>   },
>   {
>     "id": "AdobeSystemsIncorporated.AdobePhotoshopExpress_mtcwf2zmmt10c!AddText",
>     "displayName": "Add Text: Adobe Express Photos",
>     "windows": []
>   },
>   {
>     "id": "AdobeSystemsIncorporated.AdobePhotoshopExpress_mtcwf2zmmt10c!App",
>     "displayName": "Adobe Express Photos",
>     "windows": []
>   },
>   {
>     "id": "Google.AntigravityIDE",
>     "displayName": "Antigravity IDE",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\PostgreSQL\\16\\bin\\stackbuilder.exe",
>     "displayName": "Application Stack Builder",
>     "windows": []
>   },
>   {
>     "id": "B9ECED6F.ArmouryCrate_qmba6cd70vzyy!App",
>     "displayName": "Armoury Crate",
>     "windows": []
>   },
>   {
>     "id": "googleplaygames://launch/?id=com.gameloft.android.ANMP.GloftA9HM&lid=1&pid=1",
>     "displayName": "Asphalt Legends - Racing Game",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Player\\BlackmagicRAWPlayer.exe",
>     "displayName": "Blackmagic RAW Player",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Speed Test\\BlackmagicRAWSpeedTest.exe",
>     "displayName": "Blackmagic RAW Speed Test",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App",
>     "displayName": "Calculator",
>     "windows": []
>   },
>   {
>     "id": "microsoft.windowscommunicationsapps_8wekyb3d8bbwe!microsoft.windowslive.calendar",
>     "displayName": "Calendar",
>     "windows": []
>   },
>   {
>     "id": "Chrome",
>     "displayName": "diff b/w permuum and deudrant - Google Search - Google Chrome",
>     "windows": [
>       {
>         "app": "Chrome",
>         "id": 70392,
>         "title": "diff b/w permuum and deudrant - Google Search - Google Chrome"
>       }
>     ]
>   }
> ]
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.refApp = apps.find((app)=>app.id===\"Brave\");\nglobalThis.refWindow = await sky.get_window({id:refApp.windows[0].id,app:refApp.id});\nglobalThis.state = await sky.get_window_state({window:refWindow,include_screenshot:true,include_text:true});\nglobalThis.refWindow = state.window;\nnodeRepl.write(String(state.accessibility?.tree||state.accessibility?.document_text||\"\"));",
>   "title": "Viewing the live reference"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"Window: \"Sarthak Sharma | Product Builder & Technical Educator - Brave\", App: brave.exe.\n\t0 window Sarthak Sharma | Product Builder & Technical Educator - Brave Secondary Actions: Raise\n\t\t1 pane (disabled)\n\t\t2 pane (region) Sarthak Sharma | Product Builder & Technical Educator - Brave\n\t\t\t3 pane (region)\n\t\t\t\t4 pane (region)\n\t\t\t\t\t5 pane (region)\n\t\t\t\t\t\t6 button Minimize ID: view_1\n\t\t\t\t\t\t7 button Restore ID: view_3\n\t\t\t\t\t\t8 button Close ID: view_4\n\t\t\t\t\t9 pane (region)\n\t\t\t\t\t\t10 pane (region)\n\t\t\t\t\t\t\t11 toolbar (tool bar) ID: view_1000\n\t\t\t\t\t\t\t\t12 button (disabled) Back ID: view_1001\n\t\t\t\t\t\t\t\t13 button Forward ID: view_1002\n\t\t\t\t\t\t\t\t14 button Reload ID: view_1003\n\t\t\t\t\t\t\t\t15 button Bookmark this tab ID: view_1005\n\t\t\t\t\t\t\t\t16 group\n\t\t\t\t\t\t\t\t\t17 button View site information ID: view_1011\n\t\t\t\t\t\t\t\t\t18 text field (edit) (settable, string) Address and search bar Description: Search Brave or type a URL Value: sarthak-sharma-portfolio-six.vercel.app ID: view_1012\n\t\t\t\t\t\t\t\t\t19 pane (region)\n\t\t\t\t\t\t\t\t\t20 pane (region)\n\t\t\t\t\t\t\t\t\t\t21 separator Separator\n\t\t\t\t\t\t\t\t\t\t22 button Brave Shields\n\t\t\t\t\t\t\t\t\t\t23 button Brave Rewards\n\t\t\t\t\t\t\t\t24 pane (region)\n\t\t\t\t\t\t\t\t\t25 button Extensions ID: view_1006\n\t\t\t\t\t\t\t\t26 button Show sidebar\n\t\t\t\t\t\t\t\t27 button Brave Wallet\n\t\t\t\t\t\t\t\t28 button Leo AI\n\t\t\t\t\t\t\t\t29 button VPN\n\t\t\t\t\t\t\t\t30 button Brave ID: view_1007\n\t\t\t\t\t\t\t31 pane (region)\n\t\t\t\t\t\t32 pane (region)\n\t\t\t\t\t\t\t33 pane (region)\n\t\t\t\t\t\t\t\t34 pane (region)\n\t\t\t\t\t\t\t\t1359 document Sarthak Sharma | Product Builder & Technical Educator Value: https://sarthak-sharma-portfolio-six.vercel.app/ ID: RootWebArea\n\t\t\t\t\t\t\t\t\t1360 button (toggle button) Motion off — enable animations\n\t\t\t\t\t\t\t\t\t\t1361 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1362 text MOTION\n\t\t\t\t\t\t\t\t\t\t1363 text OFF\n\t\t\t\t\t\t\t\t\t1364 hyperlink (link) Skip to content Value: https://sarthak-sharma-portfolio-six.vercel.app/#main\n\t\t\t\t\t\t\t\t\t1365 group (header)\n\t\t\t\t\t\t\t\t\t\t1366 hyperlink (link) Sarthak Sharma Value: https://sarthak-sharma-portfolio-six.vercel.app/#top\n\t\t\t\t\t\t\t\t\t\t1873 group (navigation) Main navigation ID: main-nav\n\t\t\t\t\t\t\t\t\t\t\t1874 hyperlink (link) Work Value: https://sarthak-sharma-portfolio-six.vercel.app/#work\n\t\t\t\t\t\t\t\t\t\t\t1875 hyperlink (link) About Value: https://sarthak-sharma-portfolio-six.vercel.app/#about\n\t\t\t\t\t\t\t\t\t\t\t1876 hyperlink (link) Content Value: https://sarthak-sharma-portfolio-six.vercel.app/#content\n\t\t\t\t\t\t\t\t\t\t\t1877 hyperlink (link) Speaking Value: https://sarthak-sharma-portfolio-six.vercel.app/#speaking\n\t\t\t\t\t\t\t\t\t\t\t1878 hyperlink (link) Let’s talk Value: https://sarthak-sharma-portfolio-six.vercel.app/#contact\n\t\t\t\t\t\t\t\t\t\t\t\t1879 image (graphic)\n\t\t\t\t\t\t\t\t\t1374 group (main) ID: main\n\t\t\t\t\t\t\t\t\t\t1375 text ENGINEER. EDUCATOR. BUILDER.\n\t\t\t\t\t\t\t\t\t\t1880 text BASED IN INDIA · THINKING BEYOND\n\t\t\t\t\t\t\t\t\t\t1377 text A HUMAN PERSPECTIVE ON TECHNOLOGY\n\t\t\t\t\t\t\t\t\t\t1378 text (heading) Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t1379 text I build products, teach developers,\n\t\t\t\t\t\t\t\t\t\t1380 text and help education businesses grow.\n\t\t\t\t\t\t\t\t\t\t1381 hyperlink (link) Explore my work Value: https://sarthak-sharma-portfolio-six.vercel.app/#work\n\t\t\t\t\t\t\t\t\t\t\t1382 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1383 hyperlink (link) Start a conversation Value: https://sarthak-sharma-portfolio-six.vercel.app/#contact\n\t\t\t\t\t\t\t\t\t\t\t1384 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1881 text +\n\t\t\t\t\t\t\t\t\t\t1882 text 01 / PRESENCE\n\t\t\t\t\t\t\t\t\t\t1883 text ENGINEERING\n\t\t\t\t\t\t\t\t\t\t1884 text EDUCATION\n\t\t\t\t\t\t\t\t\t\t1885 text HUMAN CONNECTION\n\t\t\t\t\t\t\t\t\t\t1390 hyperlink (link) SCROLL TO DISCOVER Value: https://sarthak-sharma-portfolio-six.vercel.app/#about\n\t\t\t\t\t\t\t\t\t\t\t1391 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1392 text BUILDING & TEACHING SINCE 2021\n\t\t\t\t\t\t\t\t\t\t1886 text AN ONGOING EXPLORATION ↗\n\t\t\t\t\t\t\t\t\t\t1394 group (region) Career highlights\n\t\t\t\t\t\t\t\t\t\t\t1395 text 50,000\n\t\t\t\t\t\t\t\t\t\t\t1396 text +\n\t\t\t\t\t\t\t\t\t\t\t1397 text students taught online & offline\n\t\t\t\t\t\t\t\t\t\t\t1398 text 2.5\n\t\t\t\t\t\t\t\t\t\t\t1399 text ×\n\t\t\t\t\t\t\t\t\t\t\t1400 text offline revenue growth contributed to at Sheryians\n\t\t\t\t\t\t\t\t\t\t\t1401 text 50\n\t\t\t\t\t\t\t\t\t\t\t1402 text +\n\t\t\t\t\t\t\t\t\t\t\t1403 text freelance clients served\n\t\t\t\t\t\t\t\t\t\t\t1887 hyperlink (link) THE WORK. THE REAL-WORLD IMPACT. Value: https://sarthak-sharma-portfolio-six.vercel.app/#impact\n\t\t\t\t\t\t\t\t\t\t\t\t1888 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1406 text 01 / THE PERSON BEHIND THE WORK\n\t\t\t\t\t\t\t\t\t\t1889 text A CONNECTED PERSPECTIVE\n\t\t\t\t\t\t\t\t\t\t1408 text (heading) Technology is the starting point. People are the point.\n\t\t\t\t\t\t\t\t\t\t1409 text I connect engineering, education, and business.\n\t\t\t\t\t\t\t\t\t\t1410 text Since 2021, I’ve built and taught at Sheryians—working across\n\t\t\t\t\t\t\t\t\t\t1411 text the product, the classroom, and the business behind it.\n\t\t\t\t\t\t\t\t\t\t1412 hyperlink (link) Read my story Value: https://sarthak-sharma-portfolio-six.vercel.app/about\n\t\t\t\t\t\t\t\t\t\t\t1413 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1414 text ENGINEERING MIND.\n\t\t\t\t\t\t\t\t\t\t1415 text EDUCATOR’S INSTINCT.\n\t\t\t\t\t\t\t\t\t\t1416 text BUILDER’S AMBITION.\n\t\t\t\t\t\t\t\t\t\t1417 text THREE DISCIPLINES. ONE PERSPECTIVE.\n\t\t\t\t\t\t\t\t\t\t1418 group Explore my disciplines\n\t\t\t\t\t\t\t\t\t\t\t1419 button (toggle button) Build\n\t\t\t\t\t\t\t\t\t\t\t1420 button (toggle button) Teach\n\t\t\t\t\t\t\t\t\t\t\t1421 button (toggle button) Connect\n\t\t\t\t\t\t\t\t\t\t1422 group\n\t\t\t\t\t\t\t\t\t\t\t1423 text (heading) Give an idea structure.\n\t\t\t\t\t\t\t\t\t\t\t1424 text Products and interfaces that connect real needs to working software.\n\t\t\t\t\t\t\t\t\t\t\t1425 hyperlink (link) Explore the products ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/work\n\t\t\t\t\t\t\t\t\t\t1426 text Choose a perspective.\n\t\t\t\t\t\t\t\t\t\t1427 text 02 / SELECTED WORK\n\t\t\t\t\t\t\t\t\t\t1890 text BUILT. TAUGHT. PUT INTO THE WORLD.\n\t\t\t\t\t\t\t\t\t\t1429 text (heading) Ideas are a start. This is the work.\n\t\t\t\t\t\t\t\t\t\t1430 text From the platform people learn on\n\t\t\t\t\t\t\t\t\t\t1431 text to the lessons they remember.\n\t\t\t\t\t\t\t\t\t\t1432 text A few things I’ve helped bring to life.\n\t\t\t\t\t\t\t\t\t\t1433 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1434 hyperlink (link) Explore Sheryians Learning Management System Value: https://sarthak-sharma-portfolio-six.vercel.app/work/sheryians-lms\n\t\t\t\t\t\t\t\t\t\t\t\t1435 image (graphic) Current public Sheryians course platform homepage\n\t\t\t\t\t\t\t\t\t\t\t\t1436 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1437 text 0\n\t\t\t\t\t\t\t\t\t\t\t1438 text 1\n\t\t\t\t\t\t\t\t\t\t\t1439 text Product & engineering\n\t\t\t\t\t\t\t\t\t\t\t1440 text (heading) Sheryians Learning Management System\n\t\t\t\t\t\t\t\t\t\t\t\t1441 hyperlink (link) Sheryians Learning Management System Value: https://sarthak-sharma-portfolio-six.vercel.app/work/sheryians-lms\n\t\t\t\t\t\t\t\t\t\t\t1442 text From discovering a course to building a skill. Connecting the entire student journey in one learning experience.\n\t\t\t\t\t\t\t\t\t\t\t1443 hyperlink (link) Explore the story Value: https://sarthak-sharma-portfolio-six.vercel.app/work/sheryians-lms\n\t\t\t\t\t\t\t\t\t\t\t\t1444 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1445 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1446 hyperlink (link) Explore KODR Coding Bootcamp Value: https://sarthak-sharma-portfolio-six.vercel.app/work/kodr\n\t\t\t\t\t\t\t\t\t\t\t\t1447 image (graphic) Current public KODR bootcamp website\n\t\t\t\t\t\t\t\t\t\t\t\t1448 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1449 text 0\n\t\t\t\t\t\t\t\t\t\t\t1450 text 2\n\t\t\t\t\t\t\t\t\t\t\t1451 text Education & leadership\n\t\t\t\t\t\t\t\t\t\t\t1452 text (heading) KODR Coding Bootcamp\n\t\t\t\t\t\t\t\t\t\t\t\t1453 hyperlink (link) KODR Coding Bootcamp Value: https://sarthak-sharma-portfolio-six.vercel.app/work/kodr\n\t\t\t\t\t\t\t\t\t\t\t1454 text An intensive learning experience. Bringing instructors, mentors, and students together to turn knowledge into capability.\n\t\t\t\t\t\t\t\t\t\t\t1455 hyperlink (link) Explore the story Value: https://sarthak-sharma-portfolio-six.vercel.app/work/kodr\n\t\t\t\t\t\t\t\t\t\t\t\t1456 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1457 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1458 hyperlink (link) Explore JavaScript: God Mode Value: https://sarthak-sharma-portfolio-six.vercel.app/work/javascript-god-mode\n\t\t\t\t\t\t\t\t\t\t\t\t1459 image (graphic) JavaScript God Mode: Complete Foundations, by Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t\t\t1460 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t\t1461 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1462 text 0\n\t\t\t\t\t\t\t\t\t\t\t1463 text 3\n\t\t\t\t\t\t\t\t\t\t\t1464 text Technical education\n\t\t\t\t\t\t\t\t\t\t\t1465 text (heading) JavaScript: God Mode\n\t\t\t\t\t\t\t\t\t\t\t\t1466 hyperlink (link) JavaScript: God Mode Value: https://sarthak-sharma-portfolio-six.vercel.app/work/javascript-god-mode\n\t\t\t\t\t\t\t\t\t\t\t1467 text Making the invisible parts of JavaScript understandable. My independent YouTube series connects foundations to the language’s inner workings.\n\t\t\t\t\t\t\t\t\t\t\t1468 hyperlink (link) Explore the story Value: https://sarthak-sharma-portfolio-six.vercel.app/work/javascript-god-mode\n\t\t\t\t\t\t\t\t\t\t\t\t1469 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1470 text MORE WAYS I BUILD\n\t\t\t\t\t\t\t\t\t\t1471 hyperlink (link) 04 / ENGINEERING EXPLORATION Interview Platform MVP Value: https://sarthak-sharma-portfolio-six.vercel.app/work/interview-platform\n\t\t\t\t\t\t\t\t\t\t\t1472 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1473 hyperlink (link) 05 / APPLICATION DEVELOPMENT Employee Management System Value: https://sarthak-sharma-portfolio-six.vercel.app/work/employee-management-system\n\t\t\t\t\t\t\t\t\t\t\t1474 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1475 group (details)\n\t\t\t\t\t\t\t\t\t\t\t1476 button (disclosure triangle) Inside the interview project\n\t\t\t\t\t\t\t\t\t\t\t\t1477 text Inside the interview project\n\t\t\t\t\t\t\t\t\t\t1478 hyperlink (link) Explore all work Value: https://sarthak-sharma-portfolio-six.vercel.app/work\n\t\t\t\t\t\t\t\t\t\t\t1479 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1480 hyperlink (link) All work ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/work\n\t\t\t\t\t\t\t\t\t\t1481 hyperlink (link) Teaching & curriculum ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/education\n\t\t\t\t\t\t\t\t\t\t1482 hyperlink (link) Content & conversations ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/content\n\t\t\t\t\t\t\t\t\t\t1483 hyperlink (link) Speaking profile ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/speaking\n\t\t\t\t\t\t\t\t\t\t1484 text 03 / HOW I THINK & WORK\n\t\t\t\t\t\t\t\t\t\t1891 text DEPTH MEETS PERSPECTIVE\n\t\t\t\t\t\t\t\t\t\t1486 text (heading) How I work. From idea to impact.\n\t\t\t\t\t\t\t\t\t\t1487 text Choose a discipline. Follow the thinking.\n\t\t\t\t\t\t\t\t\t\t1488 group\n\t\t\t\t\t\t\t\t\t\t\t1489 text PRODUCT & ENGINEERING\n\t\t\t\t\t\t\t\t\t\t\t1490 list\n\t\t\t\t\t\t\t\t\t\t\t\t1491 list item 01Understand the need\n\t\t\t\t\t\t\t\t\t\t\t\t1492 list item 02Shape the experience\n\t\t\t\t\t\t\t\t\t\t\t\t1493 list item 03Build the product\n\t\t\t\t\t\t\t\t\t\t\t1494 hyperlink (link) Explore the engineering ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/work\n\t\t\t\t\t\t\t\t\t\t1495 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1496 text (heading) 01 / PRODUCT & ENGINEERING Build with perspective.\n\t\t\t\t\t\t\t\t\t\t\t\t1497 button 01 / PRODUCT & ENGINEERING Build with perspective.\n\t\t\t\t\t\t\t\t\t\t\t\t\t1498 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1499 text I connect what users need with what the technology can do. From the first requirement to the interface people use.\n\t\t\t\t\t\t\t\t\t\t\t1500 text JavaScript · React · Frontend architecture · Product development · UI/UX\n\t\t\t\t\t\t\t\t\t\t\t1501 hyperlink (link) Background & full capabilities ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/about#capabilities\n\t\t\t\t\t\t\t\t\t\t1502 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1503 text (heading) 02 / EDUCATION & COMMUNICATION Make complexity click.\n\t\t\t\t\t\t\t\t\t\t\t\t1504 button 02 / EDUCATION & COMMUNICATION Make complexity click.\n\t\t\t\t\t\t\t\t\t\t\t\t\t1505 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1506 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1507 text (heading) 03 / LEADERSHIP & GROWTH Bring people forward.\n\t\t\t\t\t\t\t\t\t\t\t\t1508 button 03 / LEADERSHIP & GROWTH Bring people forward.\n\t\t\t\t\t\t\t\t\t\t\t\t\t1509 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1510 text 04 / THE WORK, MULTIPLIED\n\t\t\t\t\t\t\t\t\t\t1892 text PEOPLE. PRODUCTS. POSSIBILITY.\n\t\t\t\t\t\t\t\t\t\t1512 text (heading) Reach is a number. Impact is personal.\n\t\t\t\t\t\t\t\t\t\t1513 text Every lesson, product, and program\n\t\t\t\t\t\t\t\t\t\t1514 text is a chance to move someone forward.\n\t\t\t\t\t\t\t\t\t\t1515 text 50,000\n\t\t\t\t\t\t\t\t\t\t1516 text +\n\t\t\t\t\t\t\t\t\t\t1517 text (heading) Students taught. Possibilities opened.\n\t\t\t\t\t\t\t\t\t\t1518 text Across online courses and offline classrooms.\n\t\t\t\t\t\t\t\t\t\t1519 text Real people learning to build what comes next.\n\t\t\t\t\t\t\t\t\t\t1520 hyperlink (link) The teaching behind the number Value: https://sarthak-sharma-portfolio-six.vercel.app/education\n\t\t\t\t\t\t\t\t\t\t\t1521 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1522 text 2.5\n\t\t\t\t\t\t\t\t\t\t1523 text ×\n\t\t\t\t\t\t\t\t\t\t1524 text (heading) Offline revenue growth\n\t\t\t\t\t\t\t\t\t\t1525 text Contributed to at Sheryians through educational delivery, operations, and team leadership.\n\t\t\t\t\t\t\t\t\t\t1526 text 50\n\t\t\t\t\t\t\t\t\t\t1527 text +\n\t\t\t\t\t\t\t\t\t\t1528 text (heading) Freelance clients served\n\t\t\t\t\t\t\t\t\t\t1529 text Translating business needs into digital products, interfaces, and experiences.\n\t\t\t\t\t\t\t\t\t\t1530 text THE COMMON THREAD\n\t\t\t\t\t\t\t\t\t\t1531 text Build something useful.\n\t\t\t\t\t\t\t\t\t\t1532 text Help people understand it.\n\t\t\t\t\t\t\t\t\t\t1533 text Give it room to grow.\n\t\t\t\t\t\t\t\t\t\t1534 text SHERYIANS / PART OF THE BUILDING STORY\n\t\t\t\t\t\t\t\t\t\t1535 text (heading) From a classroom. To a brand people know.\n\t\t\t\t\t\t\t\t\t\t1536 text Since 2021, I’ve helped grow Sheryians alongside its founding and core team—from its early coaching days into a\n\t\t\t\t\t\t\t\t\t\t1537 text multimillion-dollar EdTech startup.\n\t\t\t\t\t\t\t\t\t\t1538 text Building its platforms. Teaching its learners. Creating its content. Helping lead the business behind it.\n\t\t\t\t\t\t\t\t\t\t1539 hyperlink (link) My part in the story Value: https://sarthak-sharma-portfolio-six.vercel.app/about#section-1\n\t\t\t\t\t\t\t\t\t\t\t1540 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1541 text 2021\n\t\t\t\t\t\t\t\t\t\t1542 text Joined the building journey.\n\t\t\t\t\t\t\t\t\t\t1543 text Engineering, teaching, and content—while still in college.\n\t\t\t\t\t\t\t\t\t\t1544 text 2024\n\t\t\t\t\t\t\t\t\t\t1545 text A new chapter of backing.\n\t\t\t\t\t\t\t\t\t\t1546 text Sheryians signed its investment agreement with PhysicsWallah in November 2024; the investment completed in January 2025.\n\t\t\t\t\t\t\t\t\t\t1547 hyperlink (link) Public investment record Value: https://www.pw.live/version14/assets/pdfs/letter_agreement_dated_27th_november_2024.pdf\n\t\t\t\t\t\t\t\t\t\t\t1548 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1549 text Today\n\t\t\t\t\t\t\t\t\t\t1550 text Building for what comes next.\n\t\t\t\t\t\t\t\t\t\t1551 text Products, programs, developer education, and an independent voice.\n\t\t\t\t\t\t\t\t\t\t1552 text HOW THE IMPACT TRAVELS\n\t\t\t\t\t\t\t\t\t\t1553 group Explore how impact travels\n\t\t\t\t\t\t\t\t\t\t\t1554 button (toggle button) Build\n\t\t\t\t\t\t\t\t\t\t\t1555 button (toggle button) Teach\n\t\t\t\t\t\t\t\t\t\t\t1556 button (toggle button) Connect\n\t\t\t\t\t\t\t\t\t\t1557 group\n\t\t\t\t\t\t\t\t\t\t\t1558 text (heading) 50,000+ learners. One clear idea at a time.\n\t\t\t\t\t\t\t\t\t\t\t1559 text Across classrooms and online courses, I help people move from following code to understanding what they can build.\n\t\t\t\t\t\t\t\t\t\t\t1560 hyperlink (link) See the learning experiences ↗ Value: https://sarthak-sharma-portfolio-six.vercel.app/education\n\t\t\t\t\t\t\t\t\t\t1561 text Choose a perspective.\n\t\t\t\t\t\t\t\t\t\t1562 text A SHARED PLATFORM.\n\t\t\t\t\t\t\t\t\t\t1563 text A LASTING CONTRIBUTION.\n\t\t\t\t\t\t\t\t\t\t1564 text Part of the team behind\n\t\t\t\t\t\t\t\t\t\t1565 text Sheryians’ educational reach.\n\t\t\t\t\t\t\t\t\t\t1566 text 740K\n\t\t\t\t\t\t\t\t\t\t1567 text +\n\t\t\t\t\t\t\t\t\t\t1568 text Sheryians YouTube subscribers\n\t\t\t\t\t\t\t\t\t\t1569 text 220K\n\t\t\t\t\t\t\t\t\t\t1570 text +\n\t\t\t\t\t\t\t\t\t\t1571 text Sheryians Instagram followers\n\t\t\t\t\t\t\t\t\t\t1572 text Sheryians brand audiences, supplied snapshots—not personal follower counts. My contribution spans teaching, content, and public-facing brand work.\n\t\t\t\t\t\t\t\t\t\t1573 text 05 / IDEAS THAT TRAVEL\n\t\t\t\t\t\t\t\t\t\t1893 text ON CAMERA. IN CONVERSATION. IN YOUR CORNER.\n\t\t\t\t\t\t\t\t\t\t1575 text (heading) A voice. With something to say.\n\t\t\t\t\t\t\t\t\t\t1576 text I make the complicated click.\n\t\t\t\t\t\t\t\t\t\t1577 text Long-form lessons, practical explanations,\n\t\t\t\t\t\t\t\t\t\t1578 text and conversations that open doors.\n\t\t\t\t\t\t\t\t\t\t1579 hyperlink (link) My independent channel Value: https://www.youtube.com/@sarthack.sharma\n\t\t\t\t\t\t\t\t\t\t\t1580 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1581 group Filter videos\n\t\t\t\t\t\t\t\t\t\t\t1582 button (toggle button) All films\n\t\t\t\t\t\t\t\t\t\t\t1583 button (toggle button) My channel\n\t\t\t\t\t\t\t\t\t\t\t1584 button (toggle button) On Sheryians\n\t\t\t\t\t\t\t\t\t\t1585 group\n\t\t\t\t\t\t\t\t\t\t\t1586 text 06\n\t\t\t\t\t\t\t\t\t\t\t1587 text SELECTED FILMS\n\t\t\t\t\t\t\t\t\t\t1588 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1589 button Play JavaScript: God Mode\n\t\t\t\t\t\t\t\t\t\t\t\t1590 image (graphic) Complete foundations. Real understanding.\n\t\t\t\t\t\t\t\t\t\t\t\t1591 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1592 text Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t\t1593 text /\n\t\t\t\t\t\t\t\t\t\t\t1594 text Curriculum · Teaching · Independent creation\n\t\t\t\t\t\t\t\t\t\t\t1595 text (heading) JavaScript: God Mode\n\t\t\t\t\t\t\t\t\t\t\t1596 text Complete foundations. Real understanding.\n\t\t\t\t\t\t\t\t\t\t\t1597 hyperlink (link) Watch on YouTube Value: https://www.youtube.com/watch?v=zaKXS_qGj7E\n\t\t\t\t\t\t\t\t\t\t\t\t1598 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1599 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1600 button Play React, from the ground up.\n\t\t\t\t\t\t\t\t\t\t\t\t1601 image (graphic) ReactJS Full Course · Learn Everything\n\t\t\t\t\t\t\t\t\t\t\t\t1602 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1603 text Sheryians Coding School\n\t\t\t\t\t\t\t\t\t\t\t1604 text /\n\t\t\t\t\t\t\t\t\t\t\t1605 text Course instructor\n\t\t\t\t\t\t\t\t\t\t\t1606 text (heading) React, from the ground up.\n\t\t\t\t\t\t\t\t\t\t\t1607 text ReactJS Full Course · Learn Everything\n\t\t\t\t\t\t\t\t\t\t\t1608 hyperlink (link) Watch on YouTube Value: https://www.youtube.com/watch?v=3LRZRSIh_KE\n\t\t\t\t\t\t\t\t\t\t\t\t1609 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1610 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1611 button Play Inside a software team.\n\t\t\t\t\t\t\t\t\t\t\t\t1612 image (graphic) How Software Is Actually Built in Companies\n\t\t\t\t\t\t\t\t\t\t\t\t1613 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1614 text Sheryians Coding School\n\t\t\t\t\t\t\t\t\t\t\t1615 text /\n\t\t\t\t\t\t\t\t\t\t\t1616 text Collaborative educational video\n\t\t\t\t\t\t\t\t\t\t\t1617 text (heading) Inside a software team.\n\t\t\t\t\t\t\t\t\t\t\t1618 text How Software Is Actually Built in Companies\n\t\t\t\t\t\t\t\t\t\t\t1619 hyperlink (link) Watch on YouTube Value: https://www.youtube.com/watch?v=GL2XA90F8cc\n\t\t\t\t\t\t\t\t\t\t\t\t1620 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1621 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1622 button Play Functions. Understood.\n\t\t\t\t\t\t\t\t\t\t\t\t1623 image (graphic) JavaScript Functions · God Mode, Part 2\n\t\t\t\t\t\t\t\t\t\t\t\t1624 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1625 text Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t\t1626 text /\n\t\t\t\t\t\t\t\t\t\t\t1627 text Curriculum · Teaching · Independent creation\n\t\t\t\t\t\t\t\t\t\t\t1628 text (heading) Functions. Understood.\n\t\t\t\t\t\t\t\t\t\t\t1629 text JavaScript Functions · God Mode, Part 2\n\t\t\t\t\t\t\t\t\t\t\t1630 hyperlink (link) Watch on YouTube Value: https://www.youtube.com/watch?v=hfo45JLNOGs\n\t\t\t\t\t\t\t\t\t\t\t\t1631 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1632 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1633 button Play Arrays, beyond the basics.\n\t\t\t\t\t\t\t\t\t\t\t\t1634 image (graphic) Master Arrays in JS · God Mode, Part 3\n\t\t\t\t\t\t\t\t\t\t\t\t1635 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1636 text Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t\t1637 text /\n\t\t\t\t\t\t\t\t\t\t\t1638 text Curriculum · Teaching · Independent creation\n\t\t\t\t\t\t\t\t\t\t\t1639 text (heading) Arrays, beyond the basics.\n\t\t\t\t\t\t\t\t\t\t\t1640 text Master Arrays in JS · God Mode, Part 3\n\t\t\t\t\t\t\t\t\t\t\t1641 hyperlink (link) Watch on YouTube Value: https://www.youtube.com/watch?v=EL4s3qLj3kw\n\t\t\t\t\t\t\t\t\t\t\t\t1642 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1643 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1644 button Play Build with React.\n\t\t\t\t\t\t\t\t\t\t\t\t1645 image (graphic) Complete React JS Course · MERN Stack Development\n\t\t\t\t\t\t\t\t\t\t\t\t1646 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1647 text Sheryians Coding School\n\t\t\t\t\t\t\t\t\t\t\t1648 text /\n\t\t\t\t\t\t\t\t\t\t\t1649 text Course instructor\n\t\t\t\t\t\t\t\t\t\t\t1650 text (heading) Build with React.\n\t\t\t\t\t\t\t\t\t\t\t1651 text Complete React JS Course · MERN Stack Development\n\t\t\t\t\t\t\t\t\t\t\t1652 hyperlink (link) Watch on YouTube Value: https://www.youtube.com/watch?v=E6tAtRi82QY\n\t\t\t\t\t\t\t\t\t\t\t\t1653 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1654 text THE CONVERSATION CONTINUES\n\t\t\t\t\t\t\t\t\t\t1655 text (heading) Different formats. The same curiosity.\n\t\t\t\t\t\t\t\t\t\t1656 hyperlink (link) INSTAGRAM / @SARTHACK.SHARMA Ideas, in the everyday. Short-form content, technology, and the person behind the work. Explore my Instagram Value: https://www.instagram.com/sarthack.sharma/\n\t\t\t\t\t\t\t\t\t\t\t1657 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1658 text (heading) Ideas, in the everyday.\n\t\t\t\t\t\t\t\t\t\t\t1659 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1660 hyperlink (link) LINKEDIN / SARTHAK SHARMA The thinking behind the work. Product, education, leadership—and the people moving them forward. Connect on LinkedIn Value: https://www.linkedin.com/in/sarthack-sharma\n\t\t\t\t\t\t\t\t\t\t\t1661 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1662 text (heading) The thinking behind the work.\n\t\t\t\t\t\t\t\t\t\t\t1663 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1664 hyperlink (link) More of my teaching on Sheryians Coding School Value: https://www.youtube.com/@sheryians\n\t\t\t\t\t\t\t\t\t\t\t1665 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1666 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1667 text 06 / FROM IDEAS TO PEOPLE\n\t\t\t\t\t\t\t\t\t\t1894 text FROM THE CLASSROOM TO THE STAGE\n\t\t\t\t\t\t\t\t\t\t1669 image (graphic) Sarthak speaking to a large student audience in an auditorium\n\t\t\t\t\t\t\t\t\t\t1670 text A DIFFERENT KIND OF REACH\n\t\t\t\t\t\t\t\t\t\t1671 text (heading) Make it clear. Make it count.\n\t\t\t\t\t\t\t\t\t\t1672 hyperlink (link) Invite me to speak Value: https://www.linkedin.com/in/sarthack-sharma\n\t\t\t\t\t\t\t\t\t\t\t1673 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1674 text REAL PEOPLE. REAL CONVERSATIONS.\n\t\t\t\t\t\t\t\t\t\t1675 text (heading) Sharing what I learn. Opening what comes next.\n\t\t\t\t\t\t\t\t\t\t1676 text Technical talks, developer workshops, and conversations about careers beyond the obvious. Engagements include LPU, VIT, and Sheryians Coding School.\n\t\t\t\t\t\t\t\t\t\t1677 text JavaScript & React\n\t\t\t\t\t\t\t\t\t\t1678 text Software careers\n\t\t\t\t\t\t\t\t\t\t1679 text Product building\n\t\t\t\t\t\t\t\t\t\t1680 text Developer education\n\t\t\t\t\t\t\t\t\t\t1681 hyperlink (link) ENGINEERING / EDUCATIONAL VIDEO How Software Teams Build Software Value: https://www.youtube.com/watch?v=GL2XA90F8cc\n\t\t\t\t\t\t\t\t\t\t\t1682 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1683 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1684 hyperlink (link) CAREER CONVERSATIONS / SERIES Software Development Roles You Don’t Know About Value: https://www.youtube.com/@sheryians\n\t\t\t\t\t\t\t\t\t\t\t1685 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1686 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1687 text The series opens with Developer Relations, featuring Giri Venkatesan, introduced in the episode as Principal Developer Relations at Solace.\n\t\t\t\t\t\t\t\t\t\t1688 hyperlink (link) My independent channel Value: https://www.youtube.com/@sarthack.sharma\n\t\t\t\t\t\t\t\t\t\t\t1689 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1690 text INTERLUDE / STILL BECOMING\n\t\t\t\t\t\t\t\t\t\t1895 text A JOURNEY IN MOTION\n\t\t\t\t\t\t\t\t\t\t1692 text (heading) Started with code. Kept asking why.\n\t\t\t\t\t\t\t\t\t\t1693 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1694 text 2021\n\t\t\t\t\t\t\t\t\t\t\t1695 text (heading) Learning by building.\n\t\t\t\t\t\t\t\t\t\t\t1696 text Joined Sheryians in October while pursuing my engineering degree. Software development, teaching, and content became the foundation.\n\t\t\t\t\t\t\t\t\t\t1697 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1698 text 2024\n\t\t\t\t\t\t\t\t\t\t\t1699 text (heading) A degree. And a head start.\n\t\t\t\t\t\t\t\t\t\t\t1700 text Completed my B.Tech in Computer Science at SIRT, Bhopal, affiliated with RGPV—with hands-on experience already shaping my perspective.\n\t\t\t\t\t\t\t\t\t\t1701 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1702 text TODAY\n\t\t\t\t\t\t\t\t\t\t\t1703 text (heading) Connecting the whole picture.\n\t\t\t\t\t\t\t\t\t\t\t1704 text Building products, leading educational programs, working with teams, and developing an independent voice in technology.\n\t\t\t\t\t\t\t\t\t\t1705 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1706 text NEXT\n\t\t\t\t\t\t\t\t\t\t\t1707 text (heading) More useful things. Greater reach.\n\t\t\t\t\t\t\t\t\t\t\t1708 text Working with ambitious people to build products, learning experiences, and communities that open new possibilities.\n\t\t\t\t\t\t\t\t\t\t1709 text 06 / THE NEXT CHAPTER\n\t\t\t\t\t\t\t\t\t\t1896 text LET’S MAKE IT MATTER\n\t\t\t\t\t\t\t\t\t\t1711 text OPEN TO MEANINGFUL CONVERSATIONS\n\t\t\t\t\t\t\t\t\t\t1712 text (heading) Something great starts with a hello.\n\t\t\t\t\t\t\t\t\t\t1713 hyperlink (link) Let’s connect Value: https://www.linkedin.com/in/sarthack-sharma\n\t\t\t\t\t\t\t\t\t\t\t1714 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1715 text Products, education, speaking, brand partnerships.\n\t\t\t\t\t\t\t\t\t\t1716 text If our worlds overlap, I’d love to hear from you.\n\t\t\t\t\t\t\t\t\t\t1717 group (section footer)\n\t\t\t\t\t\t\t\t\t\t\t1718 hyperlink (link) Sarthak Sharma. Value: https://sarthak-sharma-portfolio-six.vercel.app/#top\n\t\t\t\t\t\t\t\t\t\t\t1719 hyperlink (link) LinkedIn Value: https://www.linkedin.com/in/sarthack-sharma\n\t\t\t\t\t\t\t\t\t\t\t\t1720 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1721 hyperlink (link) Instagram Value: https://www.instagram.com/sarthack.sharma\n\t\t\t\t\t\t\t\t\t\t\t\t1722 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1723 hyperlink (link) YouTube Value: https://www.youtube.com/@sarthack.sharma\n\t\t\t\t\t\t\t\t\t\t\t\t1724 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1725 hyperlink (link) GitHub Value: https://github.com/saarthack\n\t\t\t\t\t\t\t\t\t\t\t\t1726 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1727 hyperlink (link) X Value: https://x.com/sarthacksharma\n\t\t\t\t\t\t\t\t\t\t\t\t1728 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1729 hyperlink (link) Back to top Value: https://sarthak-sharma-portfolio-six.vercel.app/#top\n\t\t\t\t\t\t\t\t\t\t\t\t1730 image (graphic)\n\t\t\t\t\t\t\t\t\t\t\t1731 text ©\n\t\t\t\t\t\t\t\t\t\t\t1732 text 2026\n\t\t\t\t\t\t\t\t\t\t\t1733 text SARTHAK SHARMA\n\t\t\t\t\t\t\t\t\t\t\t1897 text BUILT WITH INTENT. ALWAYS EVOLVING.\n\t\t\t\t\t\t\t\t\t\t\t1735 text BHOPAL, INDIA ↗ THE WORLD\n\t\t\t\t\t\t\t\t\t1736 text (alert)\n\t\t\t\t\t\t35 pane (region)\n\t\t\t\t\t\t\t36 pane (region)\n\t\t\t\t\t\t\t\t37 button Tab search\n\t\t\t\t\t\t\t38 pane (region) ID: view_21\n\t\t\t\t\t\t\t\t39 tab\n\t\t\t\t\t\t\t\t\t40 tab item (selectable) New Tab ID: view_20\n\t\t\t\t\t\t\t\t\t41 tab item (selectable) The Neural Trick to Breaking ANY Habit in 60 Seconds - YouTube ID: view_20\n\t\t\t\t\t\t\t\t\t42 tab item (selectable) [HI] FFWS Global Finals 2026 - KO Phase 1 | W2D2 - Session 1 - YouTube ID: view_20\n\t\t\t\t\t\t\t\t\t43 tab item (selectable) I Built My Entire Portfolio With AI… And It Looks Insane - YouTube - Memory usage - 193 MB ID: view_20\n\t\t\t\t\t\t\t\t\t44 tab item (selectable) Sarthak Sharma | Product Builder & Technical Educator - Memory usage - 78.1 MB ID: view_20\n\t\t\t\t\t\t\t\t\t\t836 button Close\n\t\t\t\t\t\t\t\t\t45 tab item (selectable) The Best Open Source AI Coding App | Cline - YouTube ID: view_20\n\t\t\t\t\t\t\t\t\t46 tab item (selectable) Watch this before starting system design | System Design Series - 01 - YouTube ID: view_20\n\t\t\t\t\t\t\t\t48 pane (region)\n\t\t\t\t\t\t\t49 button New Tab\n\t\t\t\t\t\t\t50 pane (…167726 chars truncated…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oYFucE+YMcHoat6Lrvh/QbF4LKfVbx5dQs7t2ms44QqQs5IAErZJ38dPwoAyNS8JatFqllbwWDFdUkcWCpIreaA+3sTjHfdjHes3RtF1DWtQNlpluZ51VnbDqFRV6szkhVUepOOnrXfeGPE66f4W1vVHRmntJ5ItK3nAV7ofvD9VWMH/gXbNYHgjV47PRfEmnXdrevY6hBGs93aR+Y1qFYkMVJAKknByy0ANb4ceKhcQQjSw8k8D3MWy5hYPGhUMwIfBHzr9c8ZqnYeDNc1AsLK1hmO50j23cP78oMsIfn/e4HXZuxkV6Trut2PhfwpoVk320y3GhX1vEGRUlXznQxu6bvkB2MeCfxrnNO8fQLoOiWrSPp17pCMkU8elW18ZMnIYNKVaIg/3c560Acxa+DdfutIGpQac7WpiadcyIJHjUgM6xk72UZGWAI5rfuPh3dWWoabAEXVzeab9uMVnf28TRnBJ5JcMgx94ABux4q/e/Ej7RHbX1jO+l6tbWa2qqmk2tyHKgjP2hyJEBH8IU47Zp2jePNGs9T0bUZ49RM1poh0mWFIUK7gpCurFxkHPIIGPegDmJvh/4nhtDcyaZiP7P9qAE8RdosAl1QNuYDcM4BxnnFLp3w98UajbRTWmlllkiMyo88Ucnl8/PsZgwXjhiMHjHUV01r8QdKi8d6frTW98bW30pbFkCJvMgjK5A3Y25Prn2rpfC2p2erfEa/wDENzBqljdxae73ltcwqsNqvk4DeaWzg8EAoPvdfUA8JooooAKKKKACiiigAooooAKKKKACiiigAooooAa/am05+1NoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo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SIMdgoAzn2rEooA1LjXtRnEQa4CCKTzUEMaRBX/vDaBzzSjX78Sb1NsvyspVbSIKwbG7KhcHO0dR2rKooA1T4g1Iy3LyXCyG5CrKssKOrBfujaQQMdsCm3Wu6jdWxguJxIpQRsxjTzGUcgF8biPqazKKANi48SarcRXEctwhW5UJMRBGrSgdNxC5JHqeabpWrvp2mX0EP+tuHiPzxrIhVd+QwbIP3hjjtWTRQBqJr2pLcXUzXPmPdYEwmRZFfByMqwI47ccdqrXeoXV35v2iXf5kglb5QMsBgHgccdulVKKANKXW9Qla+Z7jJvgBcfIvz46duPwxT38Qao6OrXWVeOOJh5a8qhJUdO2TWVRQBrDxBqA2hWtlRVZBGtpEEwxUtlduDnavbtUFzq9/cvM09y7NM6O5wBymduMdMZPAxVCigDRu9Zvrt0aaSMFZPO/dwpHuf+820Dcfc56n1NQfb7nyLuHzf3d06vMNo+Ygkg9OOSelVaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiimozFRvjeNiAwDDGQehHqD60AOooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlh/iqKpYf4qAJqKKKACiiigAooooAZJ9xfqf6VHUkn3F+p/pTAMmgBKKTfjoPxNHmP/AHj+FAC0U3e/95vzo3v/AHm/OgB1FN3v/eb86N7/AN5vzoAdRTd7/wB5vzo3v/eb86AHUU3e/wDeb86N7/3m/OgB1FN3v/eb86N7/wB5vzoAdRTd7/3m/Oje/wDeb86AHUU3e/8Aeb86N7/3m/OgB1FN3v8A3m/Oje/95vzoAdRTd7/3m/Oje/8Aeb86AHUU3e/95vzo3v8A3m/OgB1FN3v/AHm/Oje/95vzoAdRTd7/AN5vzo3v/eb86AHUU3e/95vzo3v/AHm/OgB1FN3v/eb86N7/AN5vzoAdRTd7/wB5vzpfMb+8T9eaAFqxaiFtwlxnqCTiqwcH7wx7inUAJKQWyowOwqOnP2ptABRRRQAUUUUAFFFFABRRUkERmnjiUgM7BRnpknFAEdFPmjMUzxtgsjFTj2plABRRRQAUU+GN5pUijGXdgqj1J6U4wlYWkLoCr7Cm75uh5x6cUARUUUUAFFFORS7qqjLMcAUANoq3qdvDa3bwQTPN5ZKszR7OQcccnI/KqlABRRRQAUUUUAFFFFABRU9nB9puUh82KHd/HK21R9TUFABRRV6PTJjNHHPJBbeZD56NNIArL25GeT6UAUaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr6w8N/DHT/iV8APBkFzcvY6jZwO1peIm/y90h3qyZG5TtHcHIHPUH5Pr6b+Evxq0Pw/oPgLwkYzOZY/JvrwSbUs3d28tcY+bJI3cgKCOvIAB85a5pOoaDrF1pWs2slpqFq+yWF+3oQehUjkEcEVRr1D9oLxH4p1LxRJ4e8XJppuNGnY2t1bWzxNJFIAQ2C5GGAUkc4K4zwa8voAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlh/iqKpYf4qAJqKKKACiiigAooooAZJ9xfqf6VExwuPWpZPuL9T/So3+4v1P9KAI6KK6PwT4O1bxlqEtro8cQSBPNuLm4kEcNun9527D8zQBzlFdH4w8Ljw0bTbr2g6wLgMc6Vdmfy9uPv5UFc549cH0qlo3h7VNas9Tu9MtTPb6bB9ou33qvlR888kZ6HgZNAGTRXV2XhA2s+kyeL7w6DpWp27XNtemH7VvUDj92jbhkkdcVylABRRRQAUVoXej39npGn6pc25Sw1BpVtpdynzDGQH4ByMFh1A68Vn0AFFXpdKvYtHg1WSAiwmmaCOXcPmdQCRjOeAR2qjQAUVv6t4d/s/whoGu/avM/tWW6j8jy8eV5JQZ3Z+bO/0GMd6wKACiiigAooooAKKKKACiiigAooooAKKKKACiirujafJqmpQ2kTBC5JLt0VQMkn8BQBSorT1jTEsoLO5trg3FrdoWjdk2MCDhlK5OCPrTI9G1Fri1hayuY2uW2xGSJgG9xxyAOeO1AGfRWlc2Fvbaw1ncT3EEKHDyTW21xxn7m49eMc9+1JremjTbmFEmE8M8KTxSbdpKsOMjJwevc0AZ1SA5Qeo4qOnJ3oAH7U2nP2ptABRRRQAUUUUAFFFFABVnTP+Qlaf9dU/mKrUUAb82oXVhbH7JK0Ra9mJKnBOAnGfTnpWu1tco08Fr5mn2UTXDNcKAY5ecbXHAGOQM59q4migD0W9NymqzNd7Ro32b95uxsJ2jAP+1nHv0rN1OS4hSZYLVbjQmtR5YQhY1PHzZx9/dnjqa5fU76XUbs3E6orkBcICBwMd6qUAdnfXGqW2qo8Urw6P5sQjMTARGPPG3HtnOPxqrELsXEIv/P8AO/tKH/XZ3Y5x17Vy1FAHU6NcrqbB9YkEkMV1GV3/AHUDB/l9lyq8dOKg1X+0/wCwG/tYzb/tS7BN97G1s9ecenbrisK2l8idJfLjk2HOyQZU+xFT3d79ogjhjt4beJGLbYt3zE45O4knpQBctryS30e3jWWSKKW6fzTGxBKhUyOO3PStS/uNTguZvtkUoU3KfZp9+1Yhk8R+oK4zj05rk6KAOrln1SVtRk06S5kuUuyshjJZxGCdgHfbndx9Kh1G8MenWyRBrS1muphLDG+RtGzK5HUcn2rmqKAOxlkv11MJqNu7RNexfZ5WbCRjd0jHcEY6egzVPTrpdSTzNZk3ww3URG7oisGyo9F+VePauaooA7HThqhuLj+0/O/tDy5PsQuP+enG7ZnjpjGOPSsXxDNcSm0F9atDdrFh3c/PKM8Fh1B+tZFFAHeXtzJd6xrNhMQbVbTeEx0YKpDfXnr9Kbdm7sbC+nuRdSS2k8LRSzN8j8kExrj5QQcHBNcLRQB3FlZJpGvadaQTBxPK85AHOzaQgP5tT9HW4WbRP7M408p/pDLjaZP4t/v0xn8K4StO11drURtBaWiXEabFn2HePfGdueeuKAOq8OWkq2tujyyXFjNascAqsSk9UK4O5s98g8U+zkuZ7/TZZZJZIG00/MzEgyYO78ema8/ooA7uHzVvbXyNn/COfZ/n6eVjHzbv9vd68/rSWl1K2paJYEg2s1gokjxw+Vbr69OPTn1rhaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApCilCmBtxjFLRQAHJd3YlnclmZjksT1JPc0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFSw/wAVafh8AmckDPy/1qi6hLmdVGFDkAfiaAFooooAKKKKACiiigBkn3F+p/pUb/cX6n+lSSfcX6n+lRv9xfqf6UAR13fw71nRI9B8SeGvEd3cadaa19mZdQih84QNCzMN0YILA7u3PH5cJRQB9L2XxD+Hmj67pLWv9l+c9nd293qelaPJYxxM5j8s+WMSNwrDIbIzxjPA/wAUPDdzcatpUviCO0tZ9EWxttVtrW7OyQM2A28tKxUEEMfU180UUAfR/hz4leGFm8BX2peIJ0n0zTprO+gkt5nIkKYEhYAhsnjjJ55xUtj8VfD0d9o9vLrso0mLwzJZXEPkzeX9qIUAFdvJwD82Me9fNdFAH1vonivSvE0XibVdI1+6ewTw8Y5NHe2dIrAqhGS5OwknONo5554FeQ/AvxJ4f0W28Q2XirU/sNjffZ+IxcrM5QyHKSQ5K43DhuDkehrz2/8AEuu6jp6WGoa1qd1Ypjbbz3UjxrjphScDFZFAHtug+LPDV/4e8I22u+KtXsRpF/cvPDGkplnjd1MT+YmQNoXHGSMnb613c3xV8GWlvapp2uOJLbSr61jfybpiJHaMxgNIGY52tyTxjnHSvleigD1nwV4v0i08GaVBrOq3KzaPqZuv7N8uRxfQnZhAw+VQpUnDcV3f/CzfCOmeLNFli1GLUbBZrqZ7tIbxpLOSRFUPi4ZiQeflTgY96+a6KAPS/inrum6h4V8KaVY+JZ/EV1psl5591NBLGdshiKAeZyR8rDrnjoOK80oooAKKKKACiiigAooooAKKKKACiiigAooooAK0vD2pDStTS5eMyRlWjdQcHaw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gAooooAKKKKACiiigAooooAKKKKACsrV4VV1lUY3cMPetWoL5Q1nKD2GaAMCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2PD3/Lx/wAB/rVKb/j8uf8Arof5mrvh7/l4/wCA/wBapTf8flz/ANdD/M0AFFFFABRRRQAUUUUAMk+4v1P9Kjf7i/U/0qST7i/U/wBKjf7i/U/0oAjpQSCCCQRyCKSigC1eaheXqoLy7uLgJ90SyFgv0z0qrRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTk702nJ3oAH7U2nP2ptABRRRQAUUUUAFFFFABVjT/wDj9i+tV6saf/x+xfWgDerU0V4AspuHVfLZZUDEDJAPA/SsuigDYN9H/ZMQODIdsTKDzsBz+vSkkdYl1Bppo5hOAE2uGLHPB9se9ZFFAG6l3CLnUpJmSVCV2ruHzAHt61mXBe3vvM85JmDbxIrA7v8AD6VVooA6JGsoz5IljKQN56tuGGPPy/yqOGeIx2ymaMMbZ0OWHDHsfSsGigDbiuESfSgZkCxqQ/zDC/WqOmTxx+fFM2xJk2b8Z2++KpUUAaOnKtpdpJcPEAcqpV1faSOvBNTWDx2pgW5kQtvYqVcMI+MZOPU/yrIooA17V47VLUXMsbKsxYqrB9ox14z3p8DLC8WJEjSNmcs06ykjAyABjrWLRQBd1ZhJciRZUkjZRtC/wj+6R2xVKiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKhvP8Aj0m/3amqG8/49Jv92gDn6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACi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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":22030}}
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const observation = globalThis.state;\n  const elementIndex = 1360;\n  globalThis.state = null;\n  await sky.click({window:observation.window,element_index:elementIndex});\n  globalThis.state = await sky.get_window_state({window:observation.window,include_screenshot:true,include_text:true});\n  globalThis.refWindow = state.window;\n  nodeRepl.write(String(state.accessibility?.tree||\"\"));\n}",
>   "title": "Enabling reference motion"
> }
> ```
>
> Error: point (1811, 1030) is over ChatGPT.exe "Chrome Legacy Window", not target window brave.exe "Sarthak Sharma | Product Builder & Technical Educator - Brave"; activate the target or take a fresh screenshot before retrying
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "await sky.activate_window({window:refWindow});\nglobalThis.state = await sky.get_window_state({window:refWindow,include_screenshot:true,include_text:true});\nglobalThis.refWindow = state.window;\nnodeRepl.write(String(state.accessibility?.tree||\"\").slice(0,3000));",
>   "title": "Refreshing the reference view"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"Window: \"Sarthak Sharma | Product Builder & Technical Educator - Brave\", App: brave.exe.\n\t0 window Sarthak Sharma | Product Builder & Technical Educator - Brave Secondary Actions: Raise\n\t\t1 pane (disabled)\n\t\t2 pane (region) Sarthak Sharma | Product Builder & Technical Educator - Brave\n\t\t\t3 pane (region)\n\t\t\t\t4 pane (region)\n\t\t\t\t\t5 pane (region)\n\t\t\t\t\t\t6 button Minimize ID: view_1\n\t\t\t\t\t\t1898 button Maximize ID: view_2\n\t\t\t\t\t\t8 button Close ID: view_4\n\t\t\t\t\t9 pane (region)\n\t\t\t\t\t\t10 pane (region)\n\t\t\t\t\t\t\t11 toolbar (tool bar) ID: view_1000\n\t\t\t\t\t\t\t\t12 button (disabled) Back ID: view_1001\n\t\t\t\t\t\t\t\t13 button Forward ID: view_1002\n\t\t\t\t\t\t\t\t14 button Reload ID: view_1003\n\t\t\t\t\t\t\t\t15 button Bookmark this tab ID: view_1005\n\t\t\t\t\t\t\t\t16 group\n\t\t\t\t\t\t\t\t\t17 button View site information ID: view_1011\n\t\t\t\t\t\t\t\t\t18 text field (edit) (settable, string) Address and search bar Description: Search Brave or type a URL Value: sarthak-sharma-portfolio-six.vercel.app ID: view_1012\n\t\t\t\t\t\t\t\t\t19 pane (region)\n\t\t\t\t\t\t\t\t\t20 pane (region)\n\t\t\t\t\t\t\t\t\t\t21 separator Separator\n\t\t\t\t\t\t\t\t\t\t22 button Brave Shields\n\t\t\t\t\t\t\t\t\t\t23 button Brave Rewards\n\t\t\t\t\t\t\t\t24 pane (region)\n\t\t\t\t\t\t\t\t\t25 button Extensions ID: view_1006\n\t\t\t\t\t\t\t\t26 button Show sidebar\n\t\t\t\t\t\t\t\t27 button Brave Wallet\n\t\t\t\t\t\t\t\t28 button Leo AI\n\t\t\t\t\t\t\t\t29 button VPN\n\t\t\t\t\t\t\t\t30 button Brave ID: view_1007\n\t\t\t\t\t\t\t31 pane (region)\n\t\t\t\t\t\t32 pane (region)\n\t\t\t\t\t\t\t33 pane (region)\n\t\t\t\t\t\t\t\t34 pane (region)\n\t\t\t\t\t\t\t\t1359 document Sarthak Sharma | Product Builder & Technical Educator Value: https://sarthak-sharma-portfolio-six.vercel.app/ ID: RootWebArea\n\t\t\t\t\t\t\t\t\t1360 button (toggle button) Motion off — enable animations\n\t\t\t\t\t\t\t\t\t\t1361 image (graphic)\n\t\t\t\t\t\t\t\t\t\t1362 text MOTION\n\t\t\t\t\t\t\t\t\t\t1363 text OFF\n\t\t\t\t\t\t\t\t\t1364 hyperlink (link) Skip to content Value: https://sarthak-sharma-portfolio-six.vercel.app/#main\n\t\t\t\t\t\t\t\t\t1365 group (header)\n\t\t\t\t\t\t\t\t\t\t1366 hyperlink (link) Sarthak Sharma Value: https://sarthak-sharma-portfolio-six.vercel.app/#top\n\t\t\t\t\t\t\t\t\t\t1873 group (navigation) Main navigation ID: main-nav\n\t\t\t\t\t\t\t\t\t\t\t1874 hyperlink (link) Work Value: https://sarthak-sharma-portfolio-six.vercel.app/#work\n\t\t\t\t\t\t\t\t\t\t\t1875 hyperlink (link) About Value: https://sarthak-sharma-portfolio-six.vercel.app/#about\n\t\t\t\t\t\t\t\t\t\t\t1876 hyperlink (link) Content Value: https://sarthak-sharma-portfolio-six.vercel.app/#content\n\t\t\t\t\t\t\t\t\t\t\t1877 hyperlink (link) Speaking Value: https://sarthak-sharma-portfolio-six.vercel.app/#speaking\n\t\t\t\t\t\t\t\t\t\t\t1878 hyperlink (link) Let’s talk Value: https://sarthak-sharma-portfolio-six.vercel.app/#contact\n\t\t\t\t\t\t\t\t\t\t\t\t1879 image (graphic)\n\t\t\t\t\t\t\t\t\t1374 group (main) ID: main\n\t\t\t\t\t\t\t\t\t\t1375 text ENGINEER. EDUCATOR. BUILDER.\n\t\t\t\t\t\t\t\t\t\t1880 text BASED IN INDIA · THINKING BEYOND\n\t\t\t\t\t\t\t\t\t\t1377 text A HUMAN PERSPECTIVE ON TECHNOLOGY\n\t\t\t\t\t\t\t\t\t\t1378 text (heading) Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t1379 text I build products, teach developers,\n\t\t\t\t\t\t\t\t\t\t1380 text and help education businesses grow.\n\t\t\t\t\t\t\t\t\t\t1381 hyperlink (link) Explore my work Value: https://sarth"},{"type":"image","data":"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…43582 chars truncated…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+pqIa5qy37Xy6pfi9ZdjXAuH8wr6Fs5x7UgNHxvow0bVxBDbyxQCGLO/JHmGNWYZPfLdO2a56rV3qV9eoEvLy5uEDb9ssrON2AueT1wAPoBVSmAtFFFABS0lLQMKKKKAFooopAFLSUtABRRRQAUUUUALRRRQAUUUUAFLSUUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUlABRRRQAUUUUAFFFJQAUUUUAFFFFACUUUUAFFFFACUUUUwCkoooAKKKKBCUUUUAApaKKACkpaSgAooooAKSlooASiiigAooooAKSlpKACiiigQlFFFABRRRTAKSlpKACiiigApKWkoAKKKKACiiigAooooAKKKKACiiigArovDv/Hk/wD10P8AIVztdF4d/wCPJ/8Arof5CgDVq5b/AOpWqdXLf/UrQB55RRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0UUAFFFFABS0lLQAUUUUAFLSUUgFooooGFFFFAC0UUUAFFFFABS0UUAFFFFABS0lFAC0GiigBKKKKAFopKWgApaSigYtFFFABS0lLSAKKKKAFopKWgAooooAKWkooAWiiigAooooAKKKKAFopKKAFooooAKKKKACiiigAooooAKKSigAooooAKKKKACiiigApKKKACiiigApKWkoAKKKKACkoooAKKKKYCUUUUAFJS0lAgoopRQAUUUUAJRRRQAUUUUAFJS0lABRRRQAUUUUAJRRRQAUUUUCEooooAKKKKYBSUUUAFFFFABSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABXReHf8Ajyf/AK6H+Qrna6Lw7/x5P/10P8hQBq1ct/8AUrVOrlv/AKlaAPPKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAWiiigAooopALRRRQAUUUUDFooooAKKKKAClpKWgAooooAKKKKAFooooAQ0UtJQAUtJRQAtFFFAC0UlLQMKKKKAFopKWkAUUUUALRRRQAUUUUAFLSUUALRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAtJRRQAUUUUAFFFJQAUUUUAFFFJQAUUUUwCkoooAKKKKBCUUUUAFLSCloAKKKSgAooooAKKKKAEooooAKKKKACkpaSgAooooAKSlpKBBRRRQAUUUUwEooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigArovDv/Hk//XQ/yFc7XReHf+PJ/wDrof5CgDVq5b/6lap1ct/9StAHnlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUtABRRRQAUUUUALRSUtABRRRQAUtJS0gCiiigYUtJS0AFFFFABRRRQAtFFFABRRRQAUtJS0AFIaWigBKKKKAFopKWgAooooGLRRRQAUUUUALRRRSAKWkooAWiiigAooooAKKKKAFopKKAFopKWgAooooAKKKKACiiigAooooAKKKSgBaSiigAooooAKKKKACiikoAKKKKACiiigBKKKKYBRRSUAFFFFABSUtJQIKKKBQAtFFFABSUUUAFFFFABSUtFACUUUUAFFFFABSUtJQAUUUUAFJRRQIKKKKYBSUtJQAUUUUAFFFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV0Xh3/jyf/rof5CudrovDv/Hk/wD10P8AIUAatXLf/UrVOrlv/qVoA88ooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKWkpaACiiigApaSlpAFFFFAwooooAWiiigAooooAKWkpaACiiigAooooAWikpaAEopaSgApaSigBaKKKAClpKKBi0UUUAFLSUUALRRRSAKKKKAFopKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSiigAooooAKKKKAEooopgFFFJQAUUUUAFFFJQIKKKKACloFFABRRSUAFFFFABRRRQAlFFFABRRRQAUUUUAJRRRQAUUUUCEooooAKKKKYBSUUUAFFFFABSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV0Xh3/jyf/rof5CudrovDv8Ax5P/ANdD/IUAatXLf/UrVOrlv/qVoA88ooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAWiiigAooopALRSUtABRRRQMKWkpaACiiigAooooAWiiigAooooAKWkooAWiiigBKKWkoAKWkooAWiiigApaSigYtFFFABRRRSAWikpaACiiigApaSigBaKSigBaKKKACiiigAooooAKKKKACiiigAoopKAFopKKACiiigAooooAKKKSgAooopgF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wDiaPJT/n5i/Jv/AImmBBRU/kp/z8xfk3/xNJ5Kf8/MX5N/8TQBDRU3kp/z8xfk3/xNHkp/z8xfk3/xNAENJU/kp/z8xfk3/wATR5Kf8/MX5N/8TQBBRU/kp/z8xfk3/wATR5Kf8/MX5N/8TQBBRU/kp/z8xfk3/wATR5Kf8/MX5N/8TQBBRU/kp/z8xfk3/wATR5Kf8/MX5N/8TQBBRU/kp/z8xfk3/wATR5Kf8/MX5N/8TQBBRT5EVMbZEfP90Hj8wKZQAUUUUAFFFFABXReHf+PJ/wDrof5CudrovDv/AB5P/wBdD/IUAatW4P8AVLVSrcH+qWgDz2iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAWikpaACiiigApaSikAtFFFABRRRQMWikpaACiiigAooooAKWiigAooooAKKKKAClpKKAFooooASilpKACiiigBaKSigBaKKKACiiigYUtJRQAtFJRQAtFJS0AFFFFABRRRQAUUUUAFFFFABRSUUALRSUUAFFFFABRRRQAUUUlAhaSiigAooooAKKWigAooooAKSiigAooooAKKKKACkpaSgAooooAKKKKACkpaSgAooooAKKKSgQUUUUAFFFFMApKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6Lw7/wAeT/8AXQ/yFc7XReHf+PJ/+uh/kKANWrcH+qWqlW4P9UtAHntFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUtABRRRQAUUUUALRRRQAUUUUAFLSUtIAooooGFFFFAC0UUUAFFFFABRRRQAtFFFABRRRQAUUUUAFLSUUALRRRQAUlLRQAlFLSUAFFFFAC0UlFAC0UlLQAUUUUAFFFFAwooooAKKKKACiiigAooooAKKKKBBRRRQAUUUlAC0lFFABRRRQAUUUtACUtFFABRRSUALSUUUAFFFFABRRRQAUUUlABRRRQAUUUUAFFFJQAUUUUAFFFFAhKKKKACiiimAUUUlABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdF4d/48n/66H+Qrna6Lw7/AMeT/wDXQ/yFAGrVuD/VLVSrlv8A6laAPPKKKKACiiigAooooAKKcis7qiKWZjgADJJrvbj4W6tb2msNLqWkC/0izW9vdO82Tz4oyM4+5sLAYyAxxkUAcBRRVizsrm88/wCyQSTeRE00uxc7EHVj6AZFAFeit7xd4YufDE2mpc3dndpqFkl9BLaMzKY2ZlGdyqc5Q9vTmsGgAore8XeGLnwxNpqXN3Z3aahZJfQS2jMymNmZRncqnOUPb05qTw74Tu9a0q/1Rrqz0/SrJkjmu7wuEDucKgCKzE9+BwOtAHO0V6H4s+E+t+GdC1HVr2+0qe1spYY3FtK7M4lUFGXKAFee5B4PHSvPKACiiigAooooAWiiigAooooAKWkooAWiiigAooopALRSUtABRRRQMKWkooAWiiigAooooAKKKKAClpKWgAooooAKKKKACiiigBaKSigBaKKKAEopaKAEopaSgAooooAKKKKACiiigBaKSigBaKSigBaKSigBaKSigAooooAKKKKACiiigAopaKAEpaKKACiiigAopKKACiiigAooooAKKKKACkoooAKKKKACiiigAooooASiiigAooooEFJRRQAUUUUAFFFFMApKKKACiiigAoopKACiiigAooooAKKKKACiiremxeZcGQqjRwKZnV84ZV/hOPU4H40AJFbxrHHNdSFY2bhFHzsB3HbGeM59eDipzqMcXFnZW8a+sqCZj9Swx+QFU7ieS4k3ytk9AOyj0A7D2otbea7uYba0hknuJnEccUalndicBVA5JJOABQBcGpLJxd2VrKp6mOMQsPoUwM/UGmSWcc0cs2nu0iRjLRyDEijueOCB6j8QKrXVvNaXM1tdQyQXELmOSKRSrIwOCrA8gg8EGmwytDKsiY3Ke4yD7Edx7UAMoq3qQhM6y2wCxTL5nl/88zkgr9Mg49iKqUAFFFFABRRRQAV0Xh3/AI8n/wCuh/kK52ui8O/8eT/9dD/IUAatXLf/AFS1Tq3B/qloA89ooooAKKKKACiiigCS3aRJ42g3CYMCm3ruzxj3zXt/2q1+Iz3GuiWfSdf02y2eI7G3HlnUbND+9eP1k2jBR+OF54rxOwuWs763uUGWhkWQDOMkHP8ASvV7f4r6PpnjC48U6J4Va31a9wt3HLeh4NpcGXYoQHdIBgkkgZJwaTA7RvDej3lhoV7d+FLTT4X8V21nbWksSRzGykSMBZwh3FskvhznJGcqcGxpm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RL9h95pYYz/ALp3sf1Vaz6vafKvlXVs+cTx/JgZ+dTlfz5X/gVAFGvWvghrnh/RNX0WA6Smo+J9S1e2t1uLpA0NjbmVATGDz5xOTu7Arg53A+S1peGdVbQvEelaukQmewu4roRk4DmNw23PbOMUAei/FnV9E8Raj4h/tRntPFmm6jcQQzxwDyb+2WTaiSFTkSqMgORgqoBJ4I8orQ8Qak2s69qWpvGInvbmW5MYOQpdi2M+2az6ALssajR7WQAb2nlUn2Cx4/mapVbvontkgt5Hydvmsn9wtjj64C1UoAKKKKACiiigArovDv8Ax5P/ANdD/IVztdF4d/48n/66H+QoA1a1LJVNshKgnn+dZdatl/x6p+P86APM6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigBaKSloAKKKKACiiikAtFJS0AFFFFAwooooAWiiigAooooAKKKKACiiigBaKSloAKKKKACiiigAooooAKKKKACiiigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaKSigBaSiigAooooAKKKKACiiigAooooAKKKKACiikoAKKKKACiiigAooooAKKKSgAooooAKKKKACkoooEFFFFABRRRTAKKKSgAooooAKKKKACkoooAKKKKACiiigAooooAKKKKACnRu0civGzI6kMrKcEEdCDTaKANDaupSKY/KhuduCmNolbttxwGPpwMj3xVOaGSCQxzxvHIOqupBH4Go6me6uJI1jknlaNRgKzkgfhQAyKN5ZFjiRndjhVUZJPsKu+Qmnuxu/muAuUiQhgrdt59uu3n3xVaK6uIY2SGeWNHGGVXIBHuKgoAdJI8sjSSuzuxyzMckn1JptFFABRRRQAUUUUAFdF4d/48n/66H+Qrna6Lw7/x5P8A9dD/ACFAGrWrYj/RU/H+dZVa1j/x6p+P86APMqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAKKKKAFopKWgAooopAFFFFAC0UlLQAUUUUDCiiigBaKSloAKKKKACiiigAooooAKWkooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":798}}
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const observation = globalThis.state;\n  globalThis.state = null;\n  await sky.click({window:observation.window,element_index:1360});\n  globalThis.state = await sky.get_window_state({window:observation.window,include_screenshot:true,include_text:true});\n  globalThis.refWindow = state.window;\n  nodeRepl.write(String(state.accessibility?.tree||\"\").slice(0,1200));\n}",
>   "title": "Checking reference motion controls"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"Window: \"Sarthak Sharma | Product Builder & Technical Educator - Brave\", App: brave.exe.\n\t0 window Sarthak Sharma | Product Builder & Technical Educator - Brave Secondary Actions: Raise\n\t\t1 pane (disabled)\n\t\t2 pane (region) Sarthak Sharma | Product Builder & Technical Educator - Brave\n\t\t\t3 pane (region)\n\t\t\t\t4 pane (region)\n\t\t\t\t\t5 pane (region)\n\t\t\t\t\t\t6 button Minimize ID: view_1\n\t\t\t\t\t\t1898 button Maximize ID: view_2\n\t\t\t\t\t\t8 button Close ID: view_4\n\t\t\t\t\t9 pane (region)\n\t\t\t\t\t\t10 pane (region)\n\t\t\t\t\t\t\t11 toolbar (tool bar) ID: view_1000\n\t\t\t\t\t\t\t\t12 button (disabled) Back ID: view_1001\n\t\t\t\t\t\t\t\t13 button Forward ID: view_1002\n\t\t\t\t\t\t\t\t14 button Reload ID: view_1003\n\t\t\t\t\t\t\t\t15 button Bookmark this tab ID: view_1005\n\t\t\t\t\t\t\t\t16 group\n\t\t\t\t\t\t\t\t\t17 button View site information ID: view_1011\n\t\t\t\t\t\t\t\t\t18 text field (edit) (settable, string) Address and search bar Description: Search Brave or type a URL Value: sarthak-sharma-portfolio-six.vercel.app ID: view_1012\n\t\t\t\t\t\t\t\t\t19 pane (region)\n\t\t\t\t\t\t\t\t\t20 pane (region)\n\t\t\t\t\t\t\t\t\t\t21 separator Separator\n\t\t\t\t\t\t\t\t\t\t22 button Brave Shields\n\t\t\t\t\t\t\t\t\t\t23 button Brave Rewards\n\t\t\t\t\t\t\t\t24 pane (region)\n\t\t\t\t\t\t\t\t\t25 button Extensions ID: view_1006\n\t\t\t\t\t\t\t\t26 button "},{"type":"image","data":"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…24549 chars truncated…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r+RoP/QS1T/wXx//AB+jyNB/6CWqf+C+P/4/QBkUVr+RoP8A0EtT/wDBfH/8fo8jQf8AoJan/wCC+P8A+P0AZNFa3kaD/wBBLU//AAXx/wDx+l8jQf8AoJan/wCC+P8A+PUAZFFa/kaF/wBBLU//AAXx/wDx6jyNC/6CWp/+C+P/AOPUgMmitbyNB/6CWp/+C+P/AOPUeRoP/QS1P/wXx/8Ax6gDJorX8jQf+glqf/gvj/8Aj9HkaD/0EtT/APBfH/8AHqBmTRWt5Ghf9BLU/wDwXx//AB6l8jQv+glqf/gvj/8Aj1AGRRWv5Ghf9BLU/wDwXx//AB6jyNC/6CWp/wDgvj/+PUAZFLWt5Ghf9BLU/wDwXx//AB6jyNC/6CWp/wDgvj/+PUAZNFa3kaF/0EtT/wDBfH/8epfI0L/oJan/AOC+P/49QBkUVr+RoX/QS1P/AMF8f/x6suYRiZxCzPEGOxnXaSOxIycH2yfrQA2iiigBKKKKAFopKWgApaSloGFFFFAC0UUUgClpKWgAooooAKWkpaACiiigApaSigBaKKKACiiigBaKKKACiiigApaSigBaKSloAKKSigYUUUUCCiiigApKWkoAKKKKACiiigBKKKKACiiigBKKKKACiiigBKKKKACkpaSgAooopgJRRRQAUlLSUCCgdaKUUAFFFFACUUUUAFFFFACUUtJQAUUUUAFJS0UAJRRRQAUlLSUCCiiimAUUUUAJRRRQAUUUUAJRRRQAUUUUAFFFFABRRRQAUUUUAFdF4d/48n/66H+Qrna6Lw7/AMeT/wDXQ/yFAGrVy3/1K1Tq5b/6laAPPKKKKACiiigAooooAKKKKACiiigAoopaACiiigAooooAWiiigAooopALRSUtABRRRQMKWiigAooooAKWkpaACiiigAooooAWiiigBKKKKAClpKWgApaSigYtFFFABS0lLSAKKKKAFooooAKKKKAFooooAKKKKAFopKWgAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigBKKKKACiiigApKKKACiiigAooooASiiigAooooASiiigApKWkoAKKKKYCUUUUAFJS0lAgoFFKKACiiigBKKKKACiiigBKKKKACiiigApKWkoAKKKKACkpaSgQUUUUwCiiigBKKKKACiiigBKKKKACiiigAooooAKK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cEjaT+VY39oXuV/0u4+WH7OP3p4i5+Tr93k8dOajluJZzCLmWWVIlEaBnJ2ICTtXPQcnj3oA7CHwbFbTXMGrTTpcWgmupVhAxJax4G5M92YkAngAEnPSq194e046Nfapp8155CW8NxCk6qGG+ZomDY4ONhIIx16VQ8Q+I7nVdXN5A01tEkC2sUYkJKwhduwnuDk59cmqH9r6jtK/b7raYxCV81seWDkJjONoJJA6A0AWfFWlR6NqotInkdfIilJfGcuisR+ZrHq1e6he3zFr68uLlid2ZpWc5wBnk+gA/AVVoAWikpaAClpKKBi0UUUAFLSUtIAooooAWikpaACiiigApaSigBaKKKACiiigAooooAWikooAWiiigAooooAKKKKACiiigAopKKACiiigAooooAKKKKACkoooAKKKKACkpaSgAooooAKSiigAooopgJRRRQAUlLSUCCiilFABRRRQAlFFFABRRRQAUlLSUAFFFFABRRRQAlFFFABRRRQISiiigAooopgFJRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFdF4d/wCPJ/8Arof5CudrovDv/Hk//XQ/yFAGrVy3/wBStU6uW/8AqVoA88ooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigBaKKKACiiikAtFFFABRRRQMWiiigAooooAKWkpaACiiigAooooAWiiigBDRS0lABS0lFAC0UUUALRSUtAwooooAWikpaQBRRRQAtFFFABRRRQAUtJRQAtFJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUlAC0lFFABRRRQAUUUlABRRRQAUUUlABRRRTAKSiigAooooEJRRRQAUtIKWgAoopKACiiigAooooASiiigAooooAKSlpKACiiigApKWkoEFFFFABRRRTASiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACui8O/8eT/9dD/IVztdF4d/48n/AOuh/kKANWrlv/qVqnVy3/1K0AeeUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUtJS0AFFFFABRRRQAtFJS0AFFFFABS0lLSAKKKKBhS0lLQAUUUUAFFFFAC0UUUAFFFFABS0lLQAUhpaKAEooooAWikpaACiiigYtFFFABRRRQAtFFFIApaSigBaKKKACiiigAooooAWikooAWikpaACiiigAooooAKKKKACiiigAoopKAFpKKKACiiigAooooAKKKSgAooooAKKKKAEooopgFFFJQAUUUUAFJS0lAgoooFAC0UUUAFJRRQAUUUUAFJS0UAJRRRQAUUUUAFJS0lABRRRQAUlFFAgooopgFJS0lABRRRQAUUUUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXReHf+PJ/+uh/kK52ui8O/8eT/APXQ/wAhQBq1ct/9StU6uW/+pWgDzyiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigApaSloAKKKKAClpKWkAUUUUDCiiigBaKKKACiiigApaSloAKKKKACiiigBaKSloASilpKAClpKKAFooooAKWkooGLRRRQAUtJRQAtFFFIAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKKKACiiigAooooASiiimAUUUlABRRRQAUUUlAgooooAKWgUUAFFFJQAUUUUAFFFFACUUUUAFFFFABRRRQAlFFFABRRRQISiiigAooopgFJRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXReHf+PJ/+uh/kK52ui8O/wDHk/8A10P8hQBq1ct/9StU6uW/+pWgDzyiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigBaKKKACiiikAtFJS0AFFFFAwpaSloAKKKKACiiigBaKKKACiiigApaSigBaKKKAEopaSgApaSigBaKKKAClpKKBi0UUUAFFFFIBaKSloAKKKKAClpKKAFopKKAFooooAKKKKACiiigAooooAKKKKACiikoAWikooAKKKKACiiigAoopKACiiimAUUUlABRRRQAUUUUCCkoooAKBQKWgAooooASiiigAooooAKSlpKACiiigAooooAKSlpKACiiigApKWkoEFFFFABRRRTASiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigArovDv/Hk//XQ/yFc7XReHf+PJ/wDrof5CgDVq5b/6lap1ct/9StAHnlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRS0AFFFFABRRRQAtFJS0AFFFFABS0lLSAKKKKBhRRRQAtFFFABRRRQAUtJS0AFFFFABRRRQAUtJRQAtFFFACUUtJQAUtJRQAtFFFABS0lFAxaKSloAKKKKAClpKKQC0UlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSUAFFFFABRRRTAKKSigAooooAKKKSgQtJRRQAUCiloAKKKKACkoooAKKKKACiiigBKKKKACiiigAooooASiiigAooooEJRRRQAUUUUwCkpaSgAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAK6Lw7/wAeT/8AXQ/yFc7XReHf+PJ/+uh/kKANWrlv/qVqnVuD/VLQB57RRRQAUUUUAFFFFABRSqMsASAD3PapvJT/AJ+Yvyb/AOJoAgoqfyU/5+Yvyb/4mjyU/wCfmL8m/wDiaAIKKn8lP+fmL8m/+Jo8lP8An5i/Jv8A4mgCCip/JT/n5i/Jv/iaPJT/AJ+Yvyb/AOJoAgoqfyU/5+Yvyb/4mjyU/wCfmL8m/wDiaAIaKm8lP+fmL8m/+Jo8lP8An5i/Jv8A4mgCGipvJT/n5i/Jv/iaPJT/AJ+Yvyb/AOJoAhpal8lP+fmL8m/+JpfJT/n5i/Jv/iaAIaKm8lP+fmL8m/8AiaPJT/n5i/Jv/iaAIaKm8lP+fmL8m/8AiaPJT/n5i/Jv/iaQEVFTeUn/AD8xfk3/AMTR5Kf8/MX5N/8AE0AQ0VN5Kf8APzF+Tf8AxNHkp/z8xfk3/wATQMhpal8lP+fmL8m/+JpfJT/n5i/Jv/iaAIaKm8lP+fmL8m/+Jo8lP+fmL8m/+JoAhoqbyU/5+Yvyb/4mjyU/5+Yvyb/4mgCGlqbyU/5+Yvyb/wCJo8lP+fmL8m/+JoAhoqbyU/5+Yvyb/wCJo8lP+fmL8m/+JoAhoqbyU/5+Yvyb/wCJo8lP+fmL8m/+JoAioqbyU/5+Yvyb/wCJo8lP+fmL8m/+JoAhpKn8lP8An5i/Jv8A4mjyU/5+Yvyb/wCJoAgoqfyU/wCfmL8m/wDiaTyU/wCfmL8m/wDiaAIaWpfJT/n5i/Jv/iaXyU/5+Yvyb/4mgCGipvJT/n5i/Jv/AImjyU/5+Yvyb/4mgCGipvJT/n5i/Jv/AImjyU/5+Yvyb/4mgZDS1N5Kf8/MX5N/8TR5Kf8APzF+Tf8AxNAENFTeSn/PzF+Tf/E0eSn/AD8xfk3/AMTQBDRU3kp/z8xfk3/xNHkp/wA/MX5N/wDE0AQ0VN5Kf8/MX5N/hR5Kf8/MX5N/8TQBDS1L5Kf8/MX5N/8AE0vkp/z8xfk3/wATSAhoqbyU/wCfmL8m/wDiaPJT/n5i/Jv/AImgCGipvJT/AJ+Yvyb/AOJo8lP+fmL8m/8AiaAIaKm8lP8An5i/Jv8A4mjyU/5+Yvyb/wCJoAhoqbyU/wCfmL8m/wDiaPJT/n5i/Jv/AImgCCipvJT/AJ+Yvyb/AOJo8lP+fmL8m/8AiaAIaKm8lP8An5i/Jv8ACjyU/wCfmL8m/wDiaYENFTeSn/PzF+Tf/E0eSn/PzF+Tf/E0AQ0VN5Kf8/MX5N/8TR5Kf8/MX5N/8TQBDSVP5Kf8/MX5N/8AE0eSn/PzF+Tf/E0AQUVN5Kf8/MX5N/8AE0eSn/PzF+Tf/E0AQ0VN5Kf8/MX5N/8AE0eSn/PzD+Tf/E0CIKKm8lP+fmL8m/8AiaPJT/n5i/Jv/iaAIaKnEKf8/MX5N/8AE0eSn/PzF+Tf/E0AQ0VN5Kf8/MX5N/8AE0eSn/PzF+Tf/E0AQ0lT+Sn/AD8w/k3/AMTSeSn/AD8xfk3/AMTQBDRU3kp/z8xfk3/xNHkp/wA/MX5N/wDE0AQ0VN5Kf8/MX5N/8TR5Kf8APzF+Tf8AxNAEFFT+Sn/PzF+Tf/E0eSn/AD8xfk3/AMTQBBRU3kp/z8xfk3/xNHkp/wA/MX5N/wDE0AQ0VN5Kf8/MX5N/8TR5Sf8APzF+Tf8AxNAENJU/kp/z8xfk3/xNJ5Kf8/MX5N/8TQBDRU3kp/z8xfk3/wATR5Kf8/MX5N/8TQBDSVP5Sf8APzF+Tf8AxNHlJ/z8xfk3/wATQIgoqbyU/wCfmL8m/wDiaPJT/n5i/Jv/AImgCGipvJT/AJ+Yvyb/AOJo8lP+fmL8m/8AiaYEFFT+Sn/PzF+Tf/E0nkp/z8xfk3/xNAENFTeSn/PzF+Tf/E0eSn/PzF+Tf/E0AQ0lT+Sn/PzF+Tf/ABNHkp/z8xfk3/xNAEFFT+Sn/PzF+Tf/ABNHkp/z8xfk3/xNAEFFT+Sn/PzF+Tf/ABNHkp/z8xfk3/xNAEFFT+Sn/PzF+Tf/ABNHkp/z8xfk3/xNAEFFT+Sn/PzF+Tf/ABNHkp/z8xfk3/xNAEFFPkRUxtkR8/3QePzAplABRRRQAUUUUAFdF4d/48n/AOuh/kK52ui8O/8AHk//AF0P8hQBq1bg/wBUtVKtwf6paAPPaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigBaKSloAKKKKAClpKKQC0UUUAFFFFAxaKSloAKKKKACiiigApaKKACiiigAooooAKWkooAWiiigBKKWkoAKKKKAFopKKAFooooAKKKKBhS0lFAC0UlFAC0UlLQAUUUUAFFFFABRRRQAUUUUAFFJRQAtFJRQAUUUUAFFFFABRRSUCFpKKKACiiigAopaKACiiigApKKKACiiigAooooAKSlpKACiiigAooooAKSlpKACiiigAoopKBBRRRQAUUUUwCkoooAKKKKACiiigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArovDv/AB5P/wBdD/IVztdF4d/48n/66H+QoA1atwf6paqVbg/1S0Aee0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUtJS0AFFFFABRRRQAtFFFABRRRQAUtJS0gCiiigYUUUUALRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUtJRQAtFFFABSUtFACUUtJQAUUUUALRSUUALRSUtABRRRQAUUUUDCiiigAooooAKKKKACiiigAooooEFFFFABRRSUALSUUUAFFFFABRRS0AJS0UUAFFFJQAtJRRQAUUUUAFFFFABRRSUAFFFFABRRRQAUUUlABRRRQAUUUUCEooooAKKKKYBRRSUAFFFFABRRRQAUlLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV0Xh3/jyf/rof5CudrovDv8Ax5P/ANdD/IUAatW4P9UtVKuW/wDqVoA88ooooAKKKKACiiigAopyKzuqIpZmOAAMkmu9uPhbq1vaaw0upaQL/SLNb2907zZPPijIzj7mwsBjIDHGRQBwFFFWLOyubzz/ALJBJN5ETTS7FzsQdWPoBkUAV6K3vF3hi58MTaalzd2d2moWSX0EtozMpjZmUZ3KpzlD29OawaACit7xd4YufDE2mpc3dndpqFkl9BLaMzKY2ZlGdyqc5Q9vTmpPDvhO71rSr/VGurPT9KsmSOa7vC4QO5wqAIrM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IUuxbGfbNVBF7VagQ5CywKNJtpABvaeVSfYLHj+ZqkUrXvLZ7dIYHbJC+YU/uFscfXAWqjRe1PkFzlErTSKttHUTJUuJaZXIpMVIRimkVFihldF4d/48n/66H+QrnsV0Ph3/AI8n/wCuh/kKQzVrUslU2yEqCef51l1q2X/Hqn4/zoA8zooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKWgAooooAKKKKAFopKWgAooooAKKKKQC0UlLQAUUUUDCiiigBaKKKACiiigAooooAKKKKAFopKWgAooooAKKKKACiiigAooooAKKKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFopKKAFpKKKACiiigAooooAKKKKACiiigAooooAKKKSgAooooAKKKKACiiigAoopKACiiigAooooAKSiigQUUUUAFFFFMAoopKACiiigAooooAKSiigAooooAKKKKACiiigAoopRQAoqWJmjkV42ZHUhlZTggjuDUYqRKpCZpLGuoupj8qG524KY2iVu23HAJ9OBke+KY1vJDIY5o2jcdVcYI/CoIx0rRSaeSNUeaRkXgKWJA/CtoRMZMbb27SOqRqWdjgKoySa0ktFs3P2n5pwuUjQghW7bj7dcfnimW0s0aMkcsiI3DKrEAj3qZIq6YwOeUypIjSOzyMWdjksxySaieH2rU8r2pjxVbpkKoY8kXtVaSOtiWL2qlNHWE4G0JmY61Cwq7KtVnFc8kdEWQEV0Ph3/jyf/rof5CsA1v8Ah0f6E/8A10P8hWZZqVq2I/0VPx/nWVWtY/8AHqn4/wA6QzzKiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigBaKSloAKKKKQBRRRQAtFJS0AFFFFAwooooAWikpaACiiigAooooAKKKKAClpKKAFopKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikooAKKKKACiiigAooooAKKKKACkoooAKKKKACiiigQUlFFABRRRQAUUUUwCiikoAKKKKACiiigApKWkoAKKKKACiiigAooooAKKKKAClFJSigBy1KlRCpEqkSy3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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":381}}
> ```
>
> </details>
>
> I’ve confirmed the reference isn’t a single static landing page: it has dedicated Work, About, Content, and Speaking routes, plus interactive discipline/impact selectors, a video filter, and detail stories. I’m checking the live motion and page behavior now so the next pass can bring over the right interaction patterns without importing the reference person’s content.
>
> <details><summary>Edited 2 files, ran 2 commands, called 6 tools, searched the web</summary>
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const observation=globalThis.state;\n  globalThis.state=null;\n  await sky.press_key({window:observation.window,key:\"Control_L+Home\"});\n  globalThis.state=await sky.get_window_state({window:observation.window,include_screenshot:true,include_text:true});\n  globalThis.refWindow=state.window;\n  nodeRepl.write(String(state.accessibility?.tree||\"\").slice(0,1800));\n}",
>   "title": "Inspecting the reference opening"
> }
> ```
>
> ```text
> Window: "Sarthak Sharma | Product Builder & Technical Educator - Brave", App: brave.exe.
> 	0 window Sarthak Sharma | Product Builder & Technical Educator - Brave Secondary Actions: Raise
> 		1 pane (disabled)
> 		2 pane (region) Sarthak Sharma | Product Builder & Technical Educator - Brave
> 			3 pane (region)
> 				4 pane (region)
> 					5 pane (region)
> 						6 button Minimize ID: view_1
> 						1898 button Maximize ID: view_2
> 						8 button Close ID: view_4
> 					9 pane (region)
> 						10 pane (region)
> 							11 toolbar (tool bar) ID: view_1000
> 								12 button (disabled) Back ID: view_1001
> 								13 button Forward ID: view_1002
> 								14 button Reload ID: view_1003
> 								15 button Bookmark this tab ID: view_1005
> 								16 group
> 									17 button View site information ID: view_1011
> 									18 text field (edit) (settable, string) Address and search bar Description: Search Brave or type a URL Value: sarthak-sharma-portfolio-six.vercel.app ID: view_1012
> 									19 pane (region)
> 									20 pane (region)
> 										21 separator Separator
> 										22 button Brave Shields
> 										23 button Brave Rewards
> 								24 pane (region)
> 									25 button Extensions ID: view_1006
> 								26 button Show sidebar
> 								27 button Brave Wallet
> 								28 button Leo AI
> 								29 button VPN
> 								30 button Brave ID: view_1007
> 							31 pane (region)
> 						32 pane (region)
> 							33 pane (region)
> 								34 pane (region)
> 								1359 document Sarthak Sharma | Product Builder & Technical Educator Value: https://sarthak-sharma-portfolio-six.vercel.app/ ID: RootWebArea
> 									1360 button (toggle button) Motion on — pause animations
> 										1901 image (graphic)
> 										1362 text MOTION
> 										1363 text ON
> 									1364 hyperlink (link) Skip to content Value: https://sarthak-sharma-por
> ```
>
> Image output: image/jpeg
>
> Searched the web for `https://sarthak-sharma-portfolio-six.vercel.app/work`
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "await new Promise(resolve=>setTimeout(resolve,1600));\nglobalThis.state=await sky.get_window_state({window:refWindow,include_screenshot:true,include_text:false});\nglobalThis.refWindow=state.window;",
>   "title": "Observing the animated layout"
> }
> ```
>
> ```text
> {"content":[{"type":"image","data":"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ooAKKKSgAooooAKSlpKACiiigQUlFFABQKKWgAoopKACiiigAoopKACiiigApKWkoAKKKKACkpaSgAooooAKSiigAooooAKSiigAooooASiiigAoopKACiiigAoopKACiiigAoopaACiiigAooooAKKKKACiiigApaKKACiiigAooooAKKKKACiiloAKKKKACiiigAooooAKKKKAClpKWgAooooAKKKKACiiigAooooAKWiigAooooAKKKKACiiigAoopaACiiigAooopgTWVw1rdRzLk7T8wBxuU8EZ9xkV0lm8d9GrWrAv3iZgHB9h/EPcflXK0YpWA7E2N5/z6XH/AH7b/CmmwvP+fS4/79t/hXIYoxRYdzrvsF5/z6XH/ftv8KQ2F5/z6XH/AH7b/CuSxRigLnWGwvP+fS4/79t/hTTYXn/Ppcf9+2/wrlcUYosFzqTYXv8Az6XH/ftv8KabC9/59Lj/AL9t/hXMYoxRYDpjYXv/AD6XH/ftv8KadPvf+fO5/wC/Tf4VzeKMUWC50R0+9/587n/v03+FIdPvf+fO5/79N/hXP4oxRYDeOn3v/Pnc/wDfpv8ACo5bZ4FLXZEAAztf75+i9f6e9YuKQiiwie8nFxIhSPy0RQoGck+pJ+pqGkpaYBVTVQFnjQfeWMbvqST/ACIq48gtohMzAPn92vXJ9fpWOzFmLMcsTkmgBKKKKACui8O/8eT/APXQ/wAhXO10Xh3/AI8n/wCuh/kKANWtvTv+PKP8f5msStvTv+PKP8f5mtqHxGdXY8tooorE0CiiigAq5Z38luvllVkizna3b6HtVOigDSfUYyfkgYD3kz/Sm/2gP+eJ/wC+/wD61UByRSUAaH9oD/nkf++//rUf2gP+eR/77/8ArVn0UAX/AO0B/wA8j/31/wDWo/tAf88j/wB9f/WqhRQBf/tAf88j/wB9f/Wo+3j/AJ5H/vr/AOtVCigC/wDbx/zyP/fX/wBaj7eP+eR/76/+tVCigC/9vH/PI/8AfX/1qPt4/wCeR/76/wDrVQooAv8A28f88j/31/8AWpPt4/55H/vr/wCtVGigC99uH/PI/wDfX/1qPtw/55H/AL6/+tVGigC99uH/ADyP/fX/ANaj7cP+eR/76/8ArVRooAvfbh/zyP8A31/9aj7eP+eR/wC+v/rVRooAvfbh/wA8j/31/wDW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…52812 chars truncated…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mOaHJBO0CKFWYBjlhk8Dr7Zr5Dvbqe9vJ7q7laW4ndpJJGOSzE5JP1JrqviP8AEPXfH+qC61qcJBGMQ2cJIhi68hSTlueWPJ+gArj6aQgozRRTAXNFJRQAtFJRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWui8O/wDHk/8A10P8hXOZrovDn/Hk/wD10P8AIUAatXLf/UrVOrlv/qVoA88ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6Lw5/x4v/10P8hXO10Xhz/jxf8A66H+QoA1auW/+pWqdXLf/UrQB55RRRQAUUUUAFFFFAAKKBRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV0Xhz/jyf8A66H+Qrna6Lw5/wAeT/8AXQ/yFAGrVy3/ANStU6twf6paAPPaKKKACiiigAooooABRQKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAC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/knIb7/XJJ20AedQeAvEcuk2+pf2XeJaS3psWY2srGJwVBLBUJA3PtGMksrADIrKt/D2s3OmtqNrpOoT6crbDdxWztFnOMb8YzyOK9N8QfETw3rHiCLVdmr27W2vpq8UItomEkfl26srHzBtbMLEYBByOnapoXxB0W0tbG5uk1VNQtNFbRhaWyJ9nlBL/vWcuDnD527PvDOeeADzzVfD2taPDHNq2kajYwyMUR7q2eJWYdQCwGSPSsyvUvHnxF0/xHpPie1iTUC+parFfWvnhcRxrHsIPzHB9hkY715bTAKltIknuEjluIrdG6yyhiq8d9oJ/IGoq0/DN3YWGvWd5q1o17Z27+a1sCMTMoJVGzxsLBQ3faTjmgDoW+Hl+fAt74tt9S0yfS7VgpVTMksmZEj3IrxrlQ0gBOccEdRiuLrum8fTX+h+LbXV0Zp9Wt7a3s0t0VILRIbhZBEiZ+SMAMAB3PPUmuFoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACui8O/8AHk//AF0P8hXO10Xh3/jyf/rof5CgDUrUslU2yEqCef51l1q2X/Hqn4/zoA80oozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgAoozRmgDY01fN052VsvC3zKeyHGCPxzn6inmsqzuXtbhZUOcH5lzgMO6n2NbcSxXu97Ak46wuR5g45x/eH059qQxkE0lvNHNBI8U0bB0dGwysDkEEdCK2Lzxh4lvYhHeeItYuIxn5Zb6VxyCDwW9CR9CawzkHB60lAHV6L481rRvDN3o9hdTwiaSN47mOd0ltwhY7YyD8oO5sj3PrWPJ4g1l3Z31fUWdp1uixuXJMy42ydfvjAw3UYrLooA1bzxFrd9ctc3usalcXDQtbNLNdO7mJs7o8k52nJyvTk0y217V7TTJdNtdVv4dOlz5lrHcOsT54OUBwc9+KzaKALcGp39vai2t726ithKJxEkrKgkHR8A43D161btPEOoRX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Phz/jyf/rof5CoKNWul0f/AJB0P4/zNc1XS6P/AMg6H8f5munC/G/QxrfCeR0UUVzGwUUUUAFFFFAGt4SXf4q0ZP717CP/AB8Vk1a0q9k03U7O+gVGltZknRXBKllYEA4xxxVWpSfM2W2uVL1/QKKKKogKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKUUlKKAHLXTT9YP8Ar3h/9FrXMrW7Df2csUX2lriOVEWMiOMOGCjAPLDHAHHtVIllpDVuE1SjudO/573f/gOv/wAXVqK50/8A573X/fhf/i63gzGaL8RFW4yKoRXNj2muf+/K/wDxdWo7my/57XH/AH5X/wCLrsgzkmjtfBs/27RPEvhuSI3H9pafK1tFjI+0xoWQj0PH5gVwnwx8FQ+JP7R1TWJpLfQdKQSXLRAeZKT0jTPGTjr7j1rZ0PWLbStXsr+N7h2tpkl2+WF3bSDtzu6Hp+NbfiHxRoUulyaX4asbnSdNuLlr25iADeZMQBx8+AgwML09hisqtHnqJ9OprSrckGupH4i8QWB0pdE8LaaNK0NW8x487pLh+zSNyfTjJ+vTHHTGrDz2X/Pa4/78r/8AF1Vlnsuf31z/AN+V/wDi61tGCtEyu5O7KcxqjMavSzWB/wCW91/34X/4uqcsun/8/F1/34X/AOLrmmzpgiJT/oOpf9cF/wDRsdYTVsXN3bR2s8VqZpGmAVmkQIAoYNwATnkCsc1zM3Qw10Ph3/jyf/rof5CueNdD4d/48n/66H+QqCzVrpdH/wCQdD+P8zXNVtadM6WcaqeBnt7mtaNRQldmdSLkrI8uoqxeQGCbjBRvmQj0/wAar1kaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":1752}}
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n const observation=globalThis.state;\n globalThis.state=null;\n await sky.scroll({window:observation.window,screenshotId:observation.screenshots?.[0]?.id,x:850,y:680,scrollX:0,scrollY:632});\n globalThis.state=await sky.get_window_state({window:observation.window,include_screenshot:true,include_text:false});\n globalThis.refWindow=state.window;\n}",
>   "title": "Following the scroll story"
> }
> ```
>
> ```text
> {"content":[{"type":"image","data":"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AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK3tB/483/66H+QrBrpPCtvJdiO2gAMs04jQE4yTgD+dAFytzTf+PKP8f5mt3WPh1eafpEt4t5DM8KGSWMKVwAMnB78ewrB07/jyj/H+Zrah8RnV2PNKKKKxNAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKeUxCsmfvMVx9AP8aZQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUU8piFZM/eYrj6Af40AMooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKfCnmzRx5xuYLn0yaZQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdj8Of+Q1pf/X/F/wChLXHV2Pw5/wCQ1pf/AF/xf+hLQB9C+KP+RZ1f/rzm/wDQDXimnf8AHlH+P8zXtfij/kWdX/685v8A0A14pp3/AB5R/j/M1tQ+Izq7HmlFFFYmgUUUUAFFFFABRRXt/wAGtam8B/C3xZ4xso4Zr97qDT4I5wSmRhiTggnh84z2FAHi9laXF9crb2UEs87ZKxxqWY4GTwPYE1CoLMAoJJ4AHevY9c/aH8Xaxot/plxZ6LHBe28ltI8UModVdSpKkyHBweOKs+E0i+H/AMErzxX5GPEOvSvYWE+Sr28JUguh6g8McjH8NK4HjV7ZXVjKsd7bT28jKHCzRlCVPQ4Paq9eufBjxLdazqF54H1+4lu9K8QpJCrznzGtrgqdsq7u+QOPXBrzfxRotx4d8Q6jpF7/AK+zmaFjjG7B4b6EYP40wMurMFheXFtNcW9pcS28PMkqRllT/eIGB+NdX8H/AAp/wmPj/TNMlA+xq/2i6yM5hQgsPx4XPvWv8SPiNql58QDd6HcSabY6RILfT7e3crGiRscHaODk5J46YHOKAPNKdFG80qRRI0kjsFVFGSxPQAdzXrvxrsIvEGg+H/iJp1vDbxatF9nvoYl4W6Qtl8984x0H3e+aveIpLv4VfCvTdFsXMWu+JlN5eXKqFkgg2qBCD19efdqVwPGLu1uLOdobyCWCZescqFWH4Goa9t+ElwPiD4R1/wAD63vvL2KCTUdKuZpGd4ZFULsBPRc7eM92rE+CHhGO/wBV1TxHq6uNN8LxG/mhKf66SMM4jPp9zJ4Ppjmi4Hmosro2RvBbT/ZA2zz/ACzs3em7pnkVXrvU+KXiKTx/F4lu7+7dRcK0losxEbQBsmDb027cjp3z1rS/aC8KWHhrxhbXOiRmPStYtVvok/hjZidyL7fdPtux2oA8wop0UbSypGgy7kKB6k1d1zSLzQ9SlsNSiEV1GAWUMGxkZHI46Gi6vbqPldua2hQooopiCiiigAooooAKKKKACiiigAooooAmf/jzi/66P/JahqZ/+POL/ro/8lqGgAooooAKVFZ3VEUszHAAGST6Uleut4lv/hh4F0vSvD4SHVvENmuq3OpBR5scMhZEhQ9sBC271Y4x1oA8rvrC8sHRL61uLZ3XcqzRlCw9RkdKrV9I/s6+NtS8XTav4K8WXE+q2d7aSus1zKXkUYCuhY5JBDZHoQfXjwLxRpf9h+JNU0veZBZ3UkAc4ywViAePUCkBl0+CGS4njhgjeSaRgiIgyzMTgADuSa9A+B8b2/iu+12OMSHQNLu9UVWB2s6RkKpPuT+ldcf2mPGeP+PDQP8AwHl/+O0AeL6lYXWmX01lqNvJbXcLbZIpV2sh9CKrVa1W/uNV1O7v7x99zdStNI3qzHJ/nVWmAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFTP/x5xf8AXR/5LUNTP/x5xf8AXR/5LQBDRRRQAUUUUAFTWdrPe3kFpaRPNczyLFFGgyzuxwFA9SSBXq37PryaO3i/xZEI2m0TSZGhSVSUaV87c4IOMr2PetKf9pTxnLBJH9i0JN6ld6W8uVyOozJ1pAeK3EMttcSwXCNHNExR0YYKsDgg++afNaXMEMU01vNHDKMxu6EK49ietex/BrQbez8F+J/iPeyLNe6UJYrCOVdyrc7FZZTnqQXXA+p9K5/4Z+Odbk8d2lpq+o3Wo6drlwtjqFvczM6SxzEIxwehAbIx6Y6UXA81ortPi94LPgPxtdaQspmtWUXFs5GCYmJwD7ggjPfGfauSsLSa/vraztVD3FxIsUakgZZiABk9OTRfS40m3ZEFFS3MEltcywTLtlico4znBBwaipiasFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAE1l/x+Qf8AXRf51DU1l/x+Qf8AXRf51DQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdj8Of+Q1pf/X/F/wChLXHV2Pw5/wCQ1pf/AF/xf+hLQB9C+KP+RZ1f/rzm/wDQDXimnf8AHlH+P8zXtfij/kWdX/685v8A0A14pp3/AB5R/j/M1tQ+Izq7HmlFFFYmgUUUUAFFFFABXunwt0zwZ4r+GMfhbXfFB0vVX1SS9ji4T940axICWGGGBnAIOTXhdFAHqPxd+Dup/D2C3vY7v+1dJkAV7tIfK8qQk4Vl3NwRjDZ68ccZ7T9p6NdK8I+ANGgUCCK2cjHA+VI16f8AAjWv8B7qXWfgH420e5kZlgjuliZ/mEavBkAD2YFvxrL/AGqGW+8PeA9ShIMEltIB3+8sZHP4VPUZ498LmK/EzwkVJB/ta0HH/XZa9A/aytY7b4qLJGADcafDK2PXc6/yUV598MP+Sl+Ev+wvaf8Ao5K9E/a2nWb4pQIpyYdNijb2O+Rv5MKfUDe/ZUtBDo3jbVwQZY7URIMcjCux59+Pyr53r6L/AGV7lZfDXjnTlB842wlHuCjr/MfrXzpQtwPqb4L6XF4i+ALWF2AY01hCue2JYm/qa4z9sAkfEjS0BOxdIjwvYfvpv8BXcfAW9h0T4FS3txiOOTWVy2du7MkKdfwxXD/tgf8AJS9M/wCwRF/6OmpdQOb/AGbLprb4w6IijInE0R57eWzf+y1702nxaV8P/jNHbqoDXl8eBj79nE383NeA/s4W7XHxi0FlwRCZZGz6eUw/mRX0Je3SX/gL4yvE24C7vF65+5ZQqf8A0E0PcEfGFfRPxbsn1L9nr4fXyqZLmEQwjqWYNGVwPUkqtfO1fRXxTuzYfs3eArVSVmuPIkUq20gCNmz+o/OmwR4lp3h/WV1C1ZtI1EKJVJJtnwOR7V1Xxe0bU7vx5fzWmm3s8LLHh44GZT8g7gVx2m6tqLajahr+7IMqAgzNzyPeus+MOo3tv4/v44Ly5ijCxYVJWUD5F7A1yy5/bR22f5o7o+z+rS33X5M4S7tLmym8q8t5reXGdkqFGx64NQVLcXE1zJvuJpJXxjdIxY4+pqKupXtqcLtfQKKKKYgooooAKKKKACiiigAooooAmf8A484v+uj/AMlqGpn/AOPOL/ro/wDJahoAKKKKACiiruiabNrGtWGmWuPtF7cR28e7pudgoz+JoA9q/Zwtl8P6F4u8fXIVo9NtJLeCNm2iSTaHK57ZOwdP4q8Q1C7lv7+5vLkgz3ErTSEd2Ykn9TXf/FS+ttMisPAvh+6NzpukEm6mQYF3esfnfGTwOFAzxg1wmraZfaRfPZ6paTWl0gBaKZCrAEZHB9jSQHrfwCv/AAjBovinS/FOu/2Xca1EtkhKkYiwdzbypRclsfN6VZ+IHwFm0XwzceIfC+tw61pkKGd12BWWEDJdXDFXwMk9OOma8Pr3z9knxFcQeKL/AMNyfvNPv4Gn2E8JIoAJx7rwfoKH3GeN+F9euNAv2ljUTWsymG6tWOEuIjwyH04zg9q6P/hCItXlt9R8P3LDw9KGe5nmAzp+3l0cZ+YhcEHjOfxpNb8Fu/xI1/SLJxDpthcytPclPktoASckZ7DoO+O3Zf8AhN4tIlt9O8P2zf8ACPRBkuYJiM6hu4d3OPlJXAA5xj8K5qvNzfuvi6/137f5HbQ5eT9/8PTvfr8u/wCGpleJdet5bGHRNBSWDRbdi53n57qXoZX9OAAF7Y/Lma6XxLoNvFYwa1oLyz6LcMUO8fPay9TE/rxghu+fz5qtqXLy+7/Xqc9fn5/f/wCBbpbyCiiitDEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqZ/wDjzi/66P8AyWoamf8A484v+uj/AMloAhooooAKKKKAPcvgtc+DtQ+HGu+FfE/iA6PeapeqwYfJmNQhX52UpgtuBBIOPrVL4nfArUfCWiNrejakmtaWgLzMkXlvEnZsBmDLjqRj6YrxqvpD9k3U/wC0dL8T+EruMPZTxG45/wBtRG4x7gL+VJ6DK+p2v9mfsiWioQTe3SzOQMdZsj/0ED8K8F0KVoNb0+VPvR3EbD6hga+h/GCof2WIreElhp999lcnqSlwyZ9s8H8a+ddIi8/VbKHaG8ydE2kZzlgMUID3f9rqwefxh4buLeN5bi5sDCI0BZjtckYA/wCuhryrwZoOrw+MNClm0q/jjS/gZna3cBQJFySccCvVv2vLwxeJvDNtDIyT29i0uUbBXc+AR6fcNeR+C9U1CTxjoKSX10yNfwBlaZiCPMXg81lV5uR27G9Dk9pHmvuhniDQNYk17Unj0nUGRrmUqy2zkEbzyOK56aKSGVo5kaORDhkcYIPoRW34h1XUE1/U1S/u1VbqUACZgAN596w5JHlkZ5XZ3Y5LMckn61VPm5Vcmtycz5b7jaKKK0MQooooAKKKKACiiigAooooAKKKKACiiigCay/4/IP+ui/zqGprL/j8g/66L/OoaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArsPh46x6vpruwVFvoyWJwANy8muPre0H/jzf/rof5CgD6X8VuqeGNWLsFH2SUZJxyUIA/OvFdO/48o/x/maxK29O/wCPKP8AH+Zrah8RnV2PNKKKKxNAooooAKKKKALek2Mmp6rZ2ELIkt1MkCM5woLMFBPtzXVfFj4f3Xw78QW2mXV2l6J7ZbhJ0jKLyzKV5zyCv5EVxVddonxJ8Y6Hph07S/EN9BZ42rHvD7BjGELAlRx/DigD1HwdqEfw7+AOutrSPBqniQzQ2FsTtkaNogglx1Cgljn2HqKoWhbx7+ztLaLNH/avhKdpxFuyz2oXO7HYAM3/AH7968Xv7261G7kutQuZ7q5kOXmnkLu31Y8ml02+utMv4L3T7iS2u4HEkUsbYZGHcGlYD0X4CaK83it/E12rJo3h2J9QuZtuQSikqg/2j1/D3o0PQdT+NvxN1e5hlhsPPLXUryZcRRjCqoA+8cYHboelcl4p8a+I/FaxL4h1i6vY4vuRuwCA+u0YGffGa0PhCbyP4iaLdWUssMVnOt3dyoSBHbRkNMWI/h2Ag54Ocd6AOt8AS3nwl+NaaVrBjeKSRbC5dXKxmKUriXnsMg8+hFcp8TvB974Z+IN7ooiaUzzeZZ7F/wBdHIx2bR9fl+oNVfid4o/4THxzqutJGYoZ5AIUJyRGoCrnjqQM/jSaL8QPFeh6NJpOk67e2unyAjykf7uRg7SeV/4CRQB6D8YLiTwf4A8MfDxcfao4hqWoOrcCR2fEePY5P4LTviZNc/Eb4Y6D4ytYma50gHTNTjUbipAVhLn+6cj6buvBrxaR2kkZ5GZ3YlmZjkknuTV/Qdc1Pw/qKX2iX1xY3adJIXKkj0PYj2PFFgPWf2f4F8N6P4o+IF68aW+m2slpao7bRNcMoYLn1+4P+B+1Q/A3xd5914i8JatN5cXiyKWBLgn/AFdzIrKOO+7dj6geteaeKPFGteKr1LvxDqM99PGuxGkIARc5wAMAfgKxqLAb1t4V1F/G0Hhe4ieDUpLxbNlKk7GLAbsdxg5z6c16D+0rrdnd+KtM0LS50ms9BsltCy9PNz84/ABB9Qa4tviL4vbQX0V/EOoNproY2iaTJKEYK7j823HGM4xXKUAOikaKRJIzh0IZT6EVd1zVrzXNSlv9SlEt1IAGcKFzgYHAGOgqhRRZXv1HzO3LfQKKKKYgooooAKKKKACiiigAooooAKKKKAJn/wCPOL/ro/8AJahqZ/8Ajzi/66P/ACWoaACiiigAr3D4aeCdbsvhxf8AiLSNCudS1nWEl0+zCsI/ssDJhrgZOSSSQMemc814fXRweOvFtvBHDb+KdeihjUKkaahMqqB0AAbgUmB6H8Ofgn4yl8X6TcavpJsNNtrmOeeWeVOVRgxUKCSSQMdMe9dN4s+E2p/Ebx/451ixv7a1itLr7NEkiljNKkKHb/sjleeevTivGf8AhYHjL/obfEP/AIMpv/iqj0rxt4m0mPUU0/XL+FdR3fav3pYykjBYk5O7H8Q596NRmz4u+GereGfBmi+I7mSKa11AYdIgSbdjyoY9OQD+PFdp+zvYjw7Z678RNUdI9N0y2lt4I2IU3MxAO1Se/RR1yW9q8y8L+N/EvhWOSLw/rN3ZQyNvaJGzGWwBu2nIzgDnGeBVDxBr2q+I783uu6hc391t2iSdyxVeuB2A5PA45oER69qcus63f6nccS3k7zsM5wWYnGfbOKoUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqZ/+POL/ro/8lqGpn/484v+uj/yWgCGiiigAooooA7n4kfDjUvAtpot1eTxXVvqVuJRLCp2xydTHnvwQQeM88cV6J8CXi8C+APE/jnVJBC00ZstPglBU3EgXcNp7gsQMgcbW9K8q8MeP/FPheza00HW7uztWJbyVIZAT1IDAgH3FY2taxqWuXzXus31zfXTDBluJC7Y9AT0HJ46UgPZfhFrEPiP4XeNfBNwWfWLlZtSswSCbiQIp2KP726MH/gR9K88+E+i3Oq/EfRIEiPl2t3Hc3RcYEUMbhnZvTABHPeuSgmlt545reR4po2DpIjFWVgcggjoQe9dLrfxC8W65pg07VfEGoXNkBgxNJgOP9rHLf8AAs0AbXx38ZQeN/iBcX9iv+hW0Qs4HznzERmO/wDEsce2K4Owu5rC+try1YJcW8iyxsQDhlIIOD15FQUUW0sNNp3RJczyXNzLPM26WVy7tjGSTkmo6KKYm7hRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBNZf8fkH/AF0X+dQ1NZf8fkH/AF0X+dQ0AFFFFABW14Ue0GpNHfaba38bxuQs7yrtKoWBHlup7d81i0UAdhomn6LqOnTXN2ksF4w1B4baCItCfLthIgLtLuXaxJHDZ6E1b+JWi2Gj2ui/2dpk9qJrWOV7hoZAkzNGpO2RpGVsEnhUXHvXCUUAdz8NvC9r4ntdVimUi5he3MUgLcKzsrLgHHzHYMnpnNaJ8PWDW2vvDoayafbtf41LzpV+yPF/qos7thz8vDAlvM4PFea0UAem+JvDuiQ6toMNnp8lvZvMkF5cKZCCxiikK4LnJxJuBBTOSNvy7jzXiTQJl117PTNOWKCGz+0xusxcXMCIXa4DMQDuAJwoAGNuMg1y9FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUV1HgTxR4j8P3zWvhWcR3OoyRw7PJRzI2SEA3A45b9a9vvvFGqQaV4h8KeINQi1bV20O7u7meFUjjtCISBAAo+ZurFjjggYoA+aKKKKACiiigAooooAK3tB/wCPN/8Arof5CsGt7Qf+PN/+uh/kKANKtvTv+PKP8f5msSr1szCBQCQOe/vV058juTOPMrHA0UUVBQUUUUAFFFFABRRRQAUUUUAFSRzzRxSxRyyJHKAJEViA4ByMjvzUdFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUATP/wAecX/XR/5LUNTP/wAecX/XR/5LUNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUz/8ecX/AF0f+S1DUz/8ecX/AF0f+S0AQ0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUATWX/H5B/10X+dQ1NZf8fkH/XRf51DQAUUUUAFa/hiHTbnUGh1a3vJo2jdl+zXCwkFVLclo3znGO1ZFFAHVaRoGm6nYT3ovhaYF60VnKzvK4htxImGWLYeT8xJXI6AU/wAd6HpOhJpsWm3Esl3LbRz3CySlipdFb7vlKAOTjDv74rkqKAOv+HPh7TfEF3fpq0l0kUESMgt3CszNIqAfcbJ+bgcAnGSByILPS9EHhG4vr65kTUjcTQ28bTNGGCJGR8ghcE5c5zInb61y9FAHc6n4G/s658OLNKzR31xHa3eyVGMUjbGI4zsO2TG1hnKE9CBXIadYy6hM0UD2yMqFyZ7iOBcD0Z2AJ9gc1VooA9C8N+ArTV/DUOrSag8QNvM0sQAOxlMgV8/3flTI68nkdm6v4Q0qwv7eN5byGGPUZdPufPlGZBGiuZVIjJRSGHG1yODlulef0UAd14h8J6dYN4q+zSXe3S47V4N7qwcyMoY7go3r8xKkBe2RUFh4a0+88MPc4vY7yPTZNRe58xWgG2d4li2bAQW2cNv6/wANcZRQBp+GLO31HxHpdjeeb9nurmOB/KYKwDMFyCQRnn0rutC8E6Bq91fK15d6fFFqa2EAnuI3MuMlxnYvzsB8vHB4+avMqKAOzu9A0ODw1bMbq6PiG6z9nt1bcsmJ3iwV8sADCdfMJz/DjmrGreDLOw12K1FyZLWG1nluHS5ikM0sCs8kaFMiMkBcBgzLnJB6HhKKAOw8N6f4d1dta32WrRLaWUl5CBfxk4QD5W/cc5JJyMYHGO9cqbacWi3RglFqzmITbDsLgAld3TIBBx7ioaKACiiigAooooA6Lwr4pn8N2esR2NrA13qFv9mW7bPmW6nIbYR0JB6+wqn4d1uXQ5b94Ykl+2WU1i4fPyrIu0sPcVk0UAFFFFABRRRQAUUUUAFb2g/8eb/9dD/IVg1vaD/x5v8A9dD/ACFAGlV23/1K/wCe9Uqu2/8AqV/z3oA4KiiigAooooAKKKKAJLeMzTxxgOS7BQEGWOT2Hc16AmgaFZ6lM6W95d6eLS7TEs4jlSeKEswZWiG1gCMY3AHBycYrzulJJxkk4GBntQB3Wi+DbPVdSsYEmuYoLjSjfPKSrCJ97KM8D5flHHB68itG30a0/sHU9Nht7+…50011 chars truncated…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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":407}}
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n const observation=globalThis.state;\n globalThis.state=null;\n await sky.scroll({window:observation.window,screenshotId:observation.screenshots?.[0]?.id,x:850,y:400,scrollX:0,scrollY:-160});\n globalThis.state=await sky.get_window_state({window:observation.window,include_screenshot:true,include_text:false});\n globalThis.refWindow=state.window;\n}",
>   "title": "Checking upward navigation"
> }
> ```
>
> ```text
> {"content":[{"type":"image","data":"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…56679 chars truncated…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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":391}}
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.state=await sky.get_window_state({window:refWindow,include_screenshot:false,include_text:true});\nglobalThis.refWindow=state.window;\nnodeRepl.write((state.accessibility?.tree||\"\").split(\"\\n\").filter(line=>/link\\) Work|Filter videos|Explore my disciplines/.test(line)).join(\"\\n\"));",
>   "title": "Inspecting reference navigation"
> }
> ```
>
> ```text
> 											1874 hyperlink (link) Work Value: https://sarthak-sharma-portfolio-six.vercel.app/#work
> 										1418 group Explore my disciplines
> 										1581 group Filter videos
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n const observation=globalThis.state;globalThis.state=null;\n await sky.click({window:observation.window,element_index:1874});\n await new Promise(resolve=>setTimeout(resolve,900));\n globalThis.state=await sky.get_window_state({window:observation.window,include_screenshot:true,include_text:true});\n globalThis.refWindow=state.window;\n nodeRepl.write((state.accessibility?.tree||\"\").split(\"\\n\").filter(line=>/SELECTED WORK|heading\\)|group \\(article\\)|MORE WAYS/.test(line)).slice(0,30).join(\"\\n\"));\n}",
>   "title": "Reviewing the selected work"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"\t\t\t\t\t\t\t\t\t\t1378 text (heading) Sarthak Sharma\n\t\t\t\t\t\t\t\t\t\t1408 text (heading) Technology is the starting point. People are the point.\n\t\t\t\t\t\t\t\t\t\t\t1423 text (heading) Give an idea structure.\n\t\t\t\t\t\t\t\t\t\t1427 text 02 / SELECTED WORK\n\t\t\t\t\t\t\t\t\t\t1429 text (heading) Ideas are a start. This is the work.\n\t\t\t\t\t\t\t\t\t\t1433 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1440 text (heading) Sheryians Learning Management System\n\t\t\t\t\t\t\t\t\t\t1445 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1452 text (heading) KODR Coding Bootcamp\n\t\t\t\t\t\t\t\t\t\t1457 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1465 text (heading) JavaScript: God Mode\n\t\t\t\t\t\t\t\t\t\t1470 text MORE WAYS I BUILD\n\t\t\t\t\t\t\t\t\t\t1486 text (heading) How I work. From idea to impact.\n\t\t\t\t\t\t\t\t\t\t1495 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1496 text (heading) 01 / PRODUCT & ENGINEERING Build with perspective.\n\t\t\t\t\t\t\t\t\t\t1502 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1503 text (heading) 02 / EDUCATION & COMMUNICATION Make complexity click.\n\t\t\t\t\t\t\t\t\t\t1506 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1507 text (heading) 03 / LEADERSHIP & GROWTH Bring people forward.\n\t\t\t\t\t\t\t\t\t\t1512 text (heading) Reach is a number. Impact is personal.\n\t\t\t\t\t\t\t\t\t\t1517 text (heading) Students taught. Possibilities opened.\n\t\t\t\t\t\t\t\t\t\t1524 text (heading) Offline revenue growth\n\t\t\t\t\t\t\t\t\t\t1528 text (heading) Freelance clients served\n\t\t\t\t\t\t\t\t\t\t1535 text (heading) From a classroom. To a brand people know.\n\t\t\t\t\t\t\t\t\t\t\t1558 text (heading) 50,000+ learners. One clear idea at a time.\n\t\t\t\t\t\t\t\t\t\t1575 text (heading) A voice. With something to say.\n\t\t\t\t\t\t\t\t\t\t1588 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1595 text (heading) JavaScript: God Mode\n\t\t\t\t\t\t\t\t\t\t1599 group (article)\n\t\t\t\t\t\t\t\t\t\t\t1606 text (heading) React, from the ground up."},{"type":"image","data":"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rXv+fe1/L/61H/C6te/597X8v/rV5ZRR9SofyoP7RxX87PU/+F1a9/z72v5f/Wo/4XVr3/Pva/l/9avLKKPqVD+VB/aOK/nZ6n/wurXv+fe1/L/61H/C6te/597X8v8A61eWUUfUqH8qD+0cV/Oz1P8A4XVr3/Pva/l/9aj/AIXVr3/Pva/l/wDWryyij6lQ/lQf2jiv52ep/wDC6te/597X8v8A61cV4z8T3fivVY7+/SNJUhEICdMAk/8AsxrBoq6eGpU3zQjZmdXGV60eWpJtBRRRW5zBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0UoFABRilApwFOwhuKXFPC07ZVWFcixRiptlIUosFyEikxUpWmkUrBcjNJTyKQilYY2ilNJSGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdF4d/48n/AOuh/kK52ut8D3EVpPb3NxGZYobkSMgI+YDacc0Abl7omoWWm2t/c27Ja3P+rfI57jI7ZHIqO2/1K/j/ADrv9X+Imn6hpd3aNp9x+/iaMZZeCRgGuCtRm3X8f500rgecUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSlFACinAUgFPUU0iRVWpFSlRasRpWiiQ5EapTxHVhI6lEdaqBm5lPy6aY6v+VTWjpuAlMz2SomWr7x1A6VnKJopFNhTSKndahYVm0aJkZFJTjSGoGJRRRQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArovDv/Hk//XQ/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AI8n/wCuh/kKANWtvTv+PKP8f5msStvTv+PKP8f5mtqHxGdXY8tooorE0CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAUUtNpaAHg04Gos0uadxEwanB6gzS5qrisTb6QvUWaM0cwrDy1NJpuaTNK47Ck0hNJmkpDCiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6Lw7/wAeT/8AXQ/yFc7XReHf+PJ/+uh/kKANWtvTv+PKP8f5msStvTv+PKP8f5mtqHxGdXY8tooorE0CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClzSUUALmjNJRQAuaM0lFAC5opKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK6Lw7/wAeT/8AXQ/yFc7XReHf+PJ/+uh/kKANWtvTv+PKP8f5msyayu4YEnmtZ44X+7I8ZCt9D0NTWzMIFAJA57+9XTnyO5M48ysedUUUVBQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRR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rdV3mRv9YU4Hy7OW9/eqeju+jancQ3I0yQNbytl1t7tNwicphjuUHdjgHngGufooAurZmbTri/NzaIY5VQ25cLK+7JyqAfdHf0qtBK0M0cqBCyMGAdA6kg55Uggj2IwajooA7a6m0abxreXN+bRdItB8kVnBEBKMgAKq7QxyxJPXA9hVN9LtEsJ0hu9OmNnc3JeRp41aWPy18sqCcvkhsBc4J965WigDuNPh057DSZFuNLjtEktzcRSrEZpJDKRJuLfOEC4PHyEe+axNCnt4Ne0xpBaGA3IWbz40dPLLgHcGBGMZ57VhUUAaaxPq91ezyXFhbNFE02GCwLJt/gRVAG49gAM1nJjeuemabRQB12u3dheeIpbWC309IleeKGaFY44mVk2xg4AXhud5Pfk4FPa7tdN1WK3gGlSCPTSs7NBDPGZ1idhhmBBO4qMg8njmuOooAc7F3ZjjJOTgAD8h0rprhzEfDclyukvCuxpFiFuSSJDxKE+b7m3O/wB++a5eigDqb65stPvtNl0n7DJDNaFpFmgim2FpZDtYOCNyjaM9cAdjS6VL52iXkzjRAHNyZxMkKzAmIeX5akBgN2ceWOvXiuVooAfDI0MySoELIwYB1DLkeoOQR7Hiur1O5srnXGYrpywjSzjyYoo08025PRQBu3n6g4HYVyNFAHd332P+ytU/sv8AsbzdtvnzPs+7Z9nPmeXv53buuz5s+9cVaMqXcLSBWQOpYMMgjPeoaKAO41eLRbbUYYtPktJXN5ctvzEYwxRTCMn5fKDED5jt4bPGcTGbTYrmf5NHe7kjtY51Cw+SXJIk2HG1RjbudOhyRXA0UAayWBn0BZ4nsw8M0vmh7mJJCu2PGFLBmH3sYB71veODprQRJa/2aJ/OHktZ+WAIPLXO/wAvjO/P3vm654xXF0UAW9Vsv7Pv5rX7TbXXlkDzraTfG2QD8rd+tVKKKACiiigAooooAK6Lw7/x5P8A9dD/ACFc7XReHf8Ajyf/AK6H+QoA1auW/wDqVqnVy3/1K0AeeUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdF4d/48n/AOuh/kK52ui8O/8AHk//AF0P8hQBq1ct/wDUrVOrlv8A6laAPPKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA…42202 chars truncated…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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":1238}}
> ```
>
> - Wrote `./app.js` (+17 -1)
> - Wrote `./index.html` (+3 -2)
>
> - Ran ``@'
> import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";
>
> const root = document.querySelector(".hero-scene");
> if (root) {
>   const canvas = root.querySelector("canvas");
>   const portrait = root.querySelector(".hero-fallback");
>   const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
>   let renderer;
>
>   try {
>     renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
>     renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
>     renderer.setClearColor(0x000000, 0);
>     const scene = new THREE.Scene();
>     const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
>     camera.position.z = 7.1;
>
>     const sculpture = new THREE.Group();
>     scene.add(sculpture);
>     const portraitPoints = new THREE.Group();
>     sculpture.add(portraitPoints);
>
>     const rings = new THREE.Group();
>     sculpture.add(rings);
>     const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xc8f169, wireframe: true, transparent: true, opacity: 0.14 });
>     const ring = new THREE.Mesh(new THREE.IcosahedronGeometry(2.22, 2), ringMaterial);
>     rings.add(ring);
>     const halo = new THREE.Mesh(
>       new THREE.TorusGeometry(1.82, 0.009, 6, 180),
>       new THREE.MeshBasicMaterial({ color: 0xd7f9a3, transparent: true, opacity: 0.42 })
>     );
>     halo.rotation.set(1.13, 0.18, -0.28);
>     rings.add(halo);
>     const haloTwo = new THREE.Mesh(
>       new THREE.TorusGeometry(2.08, 0.006, 6, 180),
>       new THREE.MeshBasicMaterial({ color: 0x82a857, transparent: true, opacity: 0.34 })
>     );
>     haloTwo.rotation.set(0.42, 0.96, 0.55);
>     rings.add(haloTwo);
>
>     const createPortrait = () => {
>       const width = 104;
>       const height = 132;
>       const source = document.createElement("canvas");
>       source.width = width;
>       source.height = height;
>       const context = source.getContext("2d", { willReadFrequently: true });
>       if (!context || !portrait.complete || !portrait.naturalWidth) return false;
>       context.clearRect(0, 0, width, height);
>       context.drawImage(portrait, 0, 0, width, height);
>       const pixels = context.getImageData(0, 0, width, height).data;
>       const positions = [];
>       const colors = [];
>       const alphas = [];
>       for (let y = 0; y < height; y += 1) {
>         for (let x = 0; x < width; x += 1) {
>           const pixel = (y * width + x) * 4;
>           const alpha = pixels[pixel + 3] / 255;
>           if (alpha < 0.13) continue;
>           const brightness = (pixels[pixel] * 0.3 + pixels[pixel + 1] * 0.59 + pixels[pixel + 2] * 0.11) / 255;
>           const jitter = Math.sin(x * 13.7 + y * 7.3) * 0.014;
>           positions.push((x / (width - 1) - 0.5) * 3.05, (0.5 - y / (height - 1)) * 3.92, (brightness - 0.5) * 0.34 + jitter);
>           const tint = 0.74 + brightness * 0.2;
>           colors.push(tint * 0.94, tint, tint * 0.79);
>           alphas.push(alpha * (0.3 + brightness * 0.7));
>         }
>       }
>       const geometry = new THREE.BufferGeometry();
>       geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
>       geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
>       geometry.setAttribute("alpha", new THREE.Float32BufferAttribute(alphas, 1));
>       const material = new THREE.ShaderMaterial({
>         transparent: true,
>         depthWrite: false,
>         blending: THREE.AdditiveBlending,
>         uniforms: { uTime: { value: 0 }, uSize: { value: 1.65 * renderer.getPixelRatio() } },
>         vertexShader: `
>           attribute float alpha;
>           varying vec3 vColor;
>           varying float vAlpha;
>           uniform float uTime;
>           uniform float uSize;
>           void main() {
>             vec3 point = position;
>             point.z += sin(point.x * 2.1 + uTime * 0.34) * 0.045;
>             point.z += cos(point.y * 1.7 - uTime * 0.23) * 0.035;
>             vec4 viewPosition = modelViewMatrix * vec4(point, 1.0);
>             gl_Position = projectionMatrix * viewPosition;
>             gl_PointSize = uSize * (1.0 + clamp(4.5 / -viewPosition.z, 0.0, 1.0));
>             vColor = color;
>             vAlpha = alpha;
>           }
>         `,
>         fragmentShader: `
>           varying vec3 vColor;
>           varying float vAlpha;
>           void main() {
>             float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
>             float dotMask = 1.0 - smoothstep(0.23, 0.5, distanceFromCenter);
>             gl_FragColor = vec4(vColor, vAlpha * dotMask);
>           }
>         `,
>         vertexColors: true
>       });
>       const points = new THREE.Points(geometry, material);
>       portraitPoints.add(points);
>       return material;
>     };
>
>     const size = () => {
>       const rect = root.getBoundingClientRect();
>       if (!rect.width || !rect.height) return;
>       renderer.setSize(rect.width, rect.height, false);
>       camera.aspect = rect.width / rect.height;
>       camera.updateProjectionMatrix();
>       renderer.render(scene, camera);
>     };
>
>     const ready = portrait.complete
>       ? Promise.resolve()
>       : new Promise((resolve) => portrait.addEventListener("load", resolve, { once: true }));
>     ready.then(() => {
>       const material = createPortrait();
>       if (!material) return;
>       portrait.classList.add("is-covered");
>       const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
>       const onPointer = (event) => {
>         const rect = root.getBoundingClientRect();
>         pointer.targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.32;
>         pointer.targetX = ((event.clientY - rect.top) / rect.height - 0.5) * -0.22;
>       };
>       root.addEventListener("pointermove", onPointer, { passive: true });
>       root.addEventListener("pointerleave", () => { pointer.targetX = 0; pointer.targetY = 0; }, { passive: true });
>       const resize = new ResizeObserver(size);
>       resize.observe(root);
>       size();
>
>       const clock = new THREE.Clock();
>       renderer.setAnimationLoop(() => {
>         const time = clock.getElapsedTime();
>         material.uniforms.uTime.value = reducedMotion.matches ? 0 : time;
>         if (!reducedMotion.matches) {
>           pointer.x += (pointer.targetX - pointer.x) * 0.035;
>           pointer.y += (pointer.targetY - pointer.y) * 0.035;
>           sculpture.rotation.x = pointer.x + Math.sin(time * 0.22) * 0.028;
>           sculpture.rotation.y = pointer.y + Math.sin(time * 0.16) * 0.05;
>           rings.rotation.z = time * 0.025;
>         }
>         renderer.render(scene, camera);
>       });
>       reducedMotion.addEventListener?.("change", () => renderer.setAnimationLoop(reducedMotion.matches ? null : () => renderer.render(scene, camera)));
>     });
>   } catch (error) {
>     console.info("3D portrait scene unavailable; keeping the image fallback.", error);
>   }
> }
> '@ | Set-Content hero-scene.js``
>
> - Ran `@'
>
> /* Adaptive navigation and the actual WebGL portrait scene */
> .site-header{position:fixed;z-index:50;left:50%;top:12px;margin:0;width:min(1440px,calc(100% - 64px));height:70px;padding:0 24px;border:1px solid #454b3a;border-radius:3px;background:rgba(17,19,16,.86);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transform:translate(-50%,0);transition:transform .42s cubic-bezier(.2,.75,.2,1),background .3s,border-color .3s;box-shadow:0 12px 40px #0002}
> .site-header.nav-hidden{transform:translate(-50%,-145%)}
> main{padding-top:92px}
> html{scroll-padding-top:100px}
> .hero-decoration{opacity:1;pointer-events:auto}
> .hero-scene{position:absolute;inset:0;display:grid;place-items:center;overflow:visible;perspective:1000px}
> .hero-canvas,.hero-fallback{position:absolute;width:100%;height:100%;inset:0;display:block;object-fit:contain;transition:opacity .8s}
> .hero-canvas{z-index:2}
> .hero-fallback{z-index:1;opacity:.78;filter:grayscale(.88) contrast(1.04);mix-blend-mode:screen}
> .hero-fallback.is-covered{opacity:0}
> .orbit-label{z-index:3;text-shadow:0 2px 14px #111310}
> .project-visual{min-height:360px;aspect-ratio:1.55;background:#10120f}
> .project-visual .project-image{object-fit:contain;object-position:center;padding:20px;filter:saturate(.9) brightness(.94);background:radial-gradient(ellipse at center,#20251c,#10120f 72%)}
> .project-visual:after{inset:55% 0 0;background:linear-gradient(transparent,#111310a6)}
> .project-card:hover .project-visual .project-image{filter:saturate(1) brightness(1);transform:scale(1.018)}
> .project-info{min-width:0}
> .page-shell{width:min(1320px,calc(100% - 112px));margin:0 auto}
> .page-hero{padding:90px 0 74px;min-height:350px;display:flex;flex-direction:column;justify-content:flex-end;border-bottom:1px solid var(--line)}
> .page-hero .eyebrow{color:var(--lime)}
> .page-hero h1{max-width:1050px;margin:25px 0 15px;font:800 clamp(58px,10vw,132px)/.94 var(--display);letter-spacing:-.09em}
> .page-hero h1 em{font-style:normal;color:var(--lime)}
> .page-hero>p{max-width:620px;color:#aaada3;font-size:17px;line-height:1.8;margin:0}
> .story-nav{display:flex;flex-wrap:wrap;gap:9px;margin-top:32px}
> .story-nav a{padding:9px 12px;border:1px solid var(--line);color:#bdc2b5;font:9px var(--mono);letter-spacing:.06em;transition:border-color .2s,color .2s}
> .story-nav a:hover{border-color:var(--lime);color:var(--lime)}
> .case-story{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:5%;align-items:center;padding:72px 0;border-bottom:1px solid var(--line);scroll-margin-top:110px}
> .case-story:nth-child(even) .case-image-wrap{order:2}
> .case-image-wrap{position:relative;aspect-ratio:1.45;min-width:0;background:#0d0f0c;border:1px solid #343a2e;overflow:hidden;display:grid;place-items:center}
> .case-image-wrap img{width:100%;height:100%;object-fit:contain;padding:12px;background:radial-gradient(ellipse at center,#20251c,#111310 80%);transition:transform .8s cubic-bezier(.2,.75,.25,1)}
> .case-story:hover .case-image-wrap img{transform:scale(1.025)}
> .case-index{font:10px var(--mono);letter-spacing:.1em;color:var(--lime)}
> .case-copy h2{font:700 clamp(34px,4.5vw,58px)/1.06 var(--display);letter-spacing:-.07em;margin:16px 0}
> .case-copy>p{color:#aaada3;line-height:1.8;font-size:14px;max-width:550px}
> .case-copy h3{font:10px var(--mono);letter-spacing:.1em;color:#d7ddcc;margin:25px 0 9px}
> .case-copy .tag-row{margin:18px 0 8px}
> .case-links{display:flex;flex-wrap:wrap;gap:18px;margin-top:20px}
> .case-links a{font:10px var(--mono);border-bottom:1px solid #71786a;padding:8px 0}
> .case-links a:hover{color:var(--lime);border-color:var(--lime)}
> .about-story-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:10%;padding:70px 0;border-bottom:1px solid var(--line)}
> .about-story-grid h2,.journey-hero h2{font:700 clamp(42px,6vw,76px)/1.04 var(--display);letter-spacing:-.075em;margin:0}
> .about-story-grid h2 em,.journey-hero h2 em{font-style:normal;color:var(--lime)}
> .about-story-copy p{color:#afb2a9;line-height:1.9;margin:0 0 17px}
> .about-story-copy .principles{margin-top:38px}
> .journey-list{padding:18px 0 40px}
> .journey-list .timeline-item{padding-block:27px;scroll-margin-top:110px}
> .journey-list .timeline-item h3{font:600 21px var(--display)}
> .journey-list .timeline-item p{font-size:14px;max-width:700px}
> .page-cta{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:52px 0;border-top:1px solid var(--line)}
> .page-cta h2{font:700 clamp(35px,5vw,62px)/1.05 var(--display);letter-spacing:-.07em;margin:0}
> .page-cta h2 em{font-style:normal;color:var(--lime)}
> .page-cta .button{flex-shrink:0}
> .page-shell .site-footer{width:100%}
> @media(max-width:1000px){.site-header{width:calc(100% - 48px)}.case-story{grid-template-columns:1fr 1fr;gap:4%}.case-image-wrap{aspect-ratio:1.15}.case-image-wrap img{padding:10px}}
> @media(max-width:700px){
>  .site-header{top:8px;width:calc(100% - 24px);height:60px;padding:0 14px;border-radius:2px}
>  main{padding-top:76px}html{scroll-padding-top:82px}
>  .page-shell{width:calc(100% - 40px)}
>  .page-hero{min-height:310px;padding:74px 0 38px}
>  .page-hero h1{font-size:clamp(50px,13vw,82px);margin:19px 0 12px}
>  .page-hero>p{font-size:14px}
>  .story-nav{gap:6px;margin-top:22px}.story-nav a{font-size:8px;padding:8px}
>  .case-story{grid-template-columns:1fr;gap:20px;padding:42px 0}
>  .case-story:nth-child(even) .case-image-wrap{order:0}
>  .case-image-wrap{aspect-ratio:1.15;min-height:240px}
>  .case-image-wrap img{padding:10px}
>  .case-copy h2{font-size:37px;margin:12px 0}
>  .case-copy>p{font-size:13px}
>  .about-story-grid{grid-template-columns:1fr;gap:25px;padding:45px 0}
>  .about-story-grid h2,.journey-hero h2{font-size:clamp(43px,11vw,62px)}
>  .journey-list .timeline-item{padding-block:19px}.journey-list .timeline-item h3{font-size:17px}
>  .page-cta{align-items:flex-start;flex-direction:column;padding:38px 0}
> }
> @media(prefers-reduced-motion:reduce){.site-header,.hero-canvas,.hero-fallback,.case-image-wrap img{transition:none!important}}
> '@ | Add-Content styles.css`
>
> </details>
>
> I’ve now confirmed the reference’s scroll behavior: its capsule navigation disappears while moving down and returns on upward scroll, and its hero uses a real interactive particle portrait rather than static orbit shapes. I’m adapting those patterns to your portfolio, with the project screenshots contained so the interfaces aren’t cropped and separate Work/About/Journey pages for a fuller story.
>
> <details><summary>Edited 6 files, ran 8 commands</summary>
>
> - Ran `@'
> <!doctype html>
> <html lang="en">
> <head>
>   <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
>   <meta name="theme-color" content="#111310" /><meta name="description" content="Selected software projects by Vatsal Vadgama, spanning full-stack products, enterprise workflows, computer vision, and applied machine learning." />
>   <title>Selected Work — Vatsal Vadgama</title>
>   <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
>   <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
>   <link rel="stylesheet" href="styles.css" />
> </head>
> <body>
>   <div class="grain" aria-hidden="true"></div>
>   <header class="site-header"><a class="brand" href="index.html#top" aria-label="Vatsal Vadgama home"><span class="brand-mark">V<span>.</span></span><span>VATSAL VADGAMA</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span class="sr-only">Toggle menu</span></button><nav id="primary-nav" class="primary-nav" aria-label="Main navigation"><a href="work.html" aria-current="page">Work</a><a href="about.html">About</a><a href="about.html#journey">Journey</a><a href="index.html#contact">Contact <span class="arrow">↗</span></a></nav></header>
>   <div class="scroll-progress" aria-hidden="true"><span></span></div>
>   <main>
>     <section class="page-hero page-shell"><span class="eyebrow">THE WORK / IDEAS INTO PRACTICE</span><h1>Built to solve.<br /><em>Made to matter.</em></h1><p>A closer look at the products, systems, and experiments I’ve worked on—from the problem each one starts with to the engineering choices underneath.</p><nav class="story-nav" aria-label="Jump to a project"><a href="#aurapass">AuraPass</a><a href="#chemicrown">ChemiCrown</a><a href="#vixora">Vixora</a><a href="#soil">Soil Signals</a><a href="#elevara">Elevara</a><a href="#bookit">Bookit</a><a href="#p2p">Secure P2P</a></nav></section>
>     <div class="page-shell">
>       <article class="case-story" id="aurapass"><div class="case-image-wrap case-aurapass"><div class="case-diagram"><span>CAMERA INPUT</span><b>01</b><i>→</i><span>LIVENESS CHECK</span><b>02</b><i>→</i><span>EDGE VERIFY</span><b>03</b><i>→</i><span>ACCESS + AUDIT</span></div><small>ON-PREMISE IDENTITY FLOW</small></div><div class="case-copy"><span class="case-index">01 / COMPUTER VISION SYSTEMS</span><h2>Identity at the edge.<br /><em>Decisions with a trail.</em></h2><p>AuraPass combines facial attendance and access operations in an on-premise system. The work focuses on fast local verification, liveness checks, and making each decision traceable for administrators.</p><h3>THE ENGINEERING THREAD</h3><p>High-concurrency Flask and Gevent APIs coordinate with Celery workers, PostgreSQL, and Redis. A React kiosk and multi-tenant role system support the day-to-day experience; tamper-evident logs give administrators a record of events.</p><div class="tag-row"><span>React 19</span><span>Flask / Gevent</span><span>Celery</span><span>PostgreSQL</span><span>Redis</span><span>Docker</span></div><div class="case-links"><a href="https://13-60-225-165.sslip.io" target="_blank" rel="noreferrer">Live demo ↗</a><a href="https://github.com/PrashantTarbundiya/RMS" target="_blank" rel="noreferrer">Repository ↗</a><button data-open="aurapass">Read project notes ↗</button></div></div></article>
>       <article class="case-story" id="chemicrown"><div class="case-image-wrap"><img src="assets/projects/chemicrown-cdms.png" alt="ChemiCrown CDMS dashboard screenshot" loading="lazy" /></div><div class="case-copy"><span class="case-index">02 / FULL-STACK INTERNSHIP</span><h2>Complex operations,<br /><em>one connected flow.</em></h2><p>During my internship at ChemiCrown Trading Co., I worked on a B2B commerce and distribution platform for industrial chemicals. It brings catalog, inventory compliance, sales orders, payments, and employee administration into one operational surface.</p><h3>FROM CUSTOMER NEED TO SYSTEM</h3><p>The platform connected storefront and internal workflows through a React/Vite interface, Node.js services, and a PostgreSQL data model built with Prisma and Supabase.</p><div class="tag-row"><span>React / Vite</span><span>Node.js</span><span>PostgreSQL</span><span>Prisma</span><span>Supabase</span></div><div class="case-links"><button data-open="chemicrown">Read project notes ↗</button></div></div></article>
>       <article class="case-story" id="vixora"><div class="case-image-wrap"><img src="assets/projects/vixora-dashboard.png" alt="Vixora video discovery and streaming interface" loading="lazy" /></div><div class="case-copy"><span class="case-index">03 / FULL-STACK PRODUCT</span><h2>From upload<br /><em>to the next watch.</em></h2><p>Vixora explores the full journey around video: publishing, organizing, discovering, and returning to content. Its interface is shaped around the viewer’s next action; the service layer handles the workflows behind playback and creator tools.</p><h3>PRODUCT SYSTEM</h3><p>Node.js and PostgreSQL power the API and data model, with Redis for caching and rate limiting, BullMQ for background processing, and Socket.IO for real-time updates.</p><div class="tag-row"><span>Node.js</span><span>PostgreSQL</span><span>Redis</span><span>Socket.IO</span><span>BullMQ</span></div><div class="case-links"><a href="https://app.vixora.co.in" target="_blank" rel="noreferrer">Live platform ↗</a><a href="https://github.com/vatsal3030/vixora-backend" target="_blank" rel="noreferrer">Backend ↗</a><button data-open="vixora">Read project notes ↗</button></div></div></article>
>       <article class="case-story" id="soil"><div class="case-image-wrap"><img src="assets/projects/soil-analysis.png" alt="Soil analysis project visualization and interface" loading="lazy" /></div><div class="case-copy"><span class="case-index">04 / APPLIED MACHINE LEARNING</span><h2>Reading soil<br /><em>through its spectrum.</em></h2><p>A team project for HackNUthon 6.0’s Reve digital farming track. The pipeline turns soil spectrometer readings into useful indicators for nutrient, moisture, and pH prediction.</p><h3>EXPERIMENT, COMPARE, REFINE</h3><p>We processed the readings, engineered wavelength features, and compared approaches including Random Forest, CatBoost, LightGBM, and TensorFlow. The model comparison reached an R² score of 0.89, and the team was a finalist.</p><div class="tag-row"><span>Python</span><span>Scikit-learn</span><span>CatBoost</span><span>LightGBM</span><span>TensorFlow</span></div><div class="case-links"><a href="https://github.com/vatsal3030/Reve-soil-1.0" target="_blank" rel="noreferrer">Project repository ↗</a><button data-open="soil">Read project notes ↗</button></div></div></article>
>       <article class="case-story" id="elevara"><div class="case-image-wrap"><img src="assets/projects/elevara.png" alt="Elevara AI career toolkit interface" loading="lazy" /></div><div class="case-copy"><span class="case-index">05 / AI CAREER TOOLS</span><h2>Career prep,<br /><em>as a connected toolkit.</em></h2><p>Elevara is a career product concept exploring how resume feedback, job-specific tailoring, cover letters, interview practice, and learning plans could work together.</p><h3>A SINGLE PREPARATION LOOP</h3><p>The product direction brings repeated job-search tasks into one place, linking application context with interview preparation and the skills a candidate wants to strengthen.</p><div class="tag-row"><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>Gemini API</span></div><div class="case-links"><a href="https://career.vixora.co.in/" target="_blank" rel="noreferrer">Open Elevara ↗</a><button data-open="elevara">Read project notes ↗</button></div></div></article>
>       <article class="case-story" id="bookit"><div class="case-image-wrap"><img src="assets/projects/bookit.png" alt="Bookit service marketplace interface" loading="lazy" /></div><div class="case-copy"><span class="case-index">06 / SERVICE MARKETPLACE</span><h2>Make finding a service<br /><em>feel straightforward.</em></h2><p>Bookit explores the core service-booking flow: find a provider, choose a time, and complete a booking through a clear customer experience.</p><h3>PRODUCT FOUNDATION</h3><p>A React client and Express backend use PostgreSQL and Prisma for structured provider, appointment, and account workflows.</p><div class="tag-row"><span>React</span><span>Express</span><span>PostgreSQL</span><span>Prisma</span></div><div class="case-links"><a href="https://bookit.vixora.co.in/" target="_blank" rel="noreferrer">Open Bookit ↗</a><a href="https://github.com/vatsal3030/Bookit-Backend" target="_blank" rel="noreferrer">Backend ↗</a><button data-open="bookit">Read project notes ↗</button></div></div></article>
>       <article class="case-story" id="p2p"><div class="case-image-wrap case-p2p"><div class="case-diagram"><span>PEER A</span><b>KEY EXCHANGE</b><i>⇄</i><span>PEER B</span><b>AUTHENTICATED</b><i>⇄</i><span>ENCRYPTED STORE</span></div><small>SECURE PEER-TO-PEER EXPERIMENT</small></div><div class="case-copy"><span class="case-index">07 / SYSTEMS PROGRAMMING</span><h2>Closer to the wire.<br /><em>Careful by design.</em></h2><p>A C++ peer-to-peer messaging experiment focused on authentication, secure file handling, and encrypted message storage.</p><h3>LOW-LEVEL LEARNING</h3><p>The project explores direct peer communication and custom memory management to understand how systems behavior and security decisions shape a product.</p><div class="tag-row"><span>C++</span><span>Data structures</span><span>Networking</span><span>Cryptography</span></div><div class="case-links"><a href="https://github.com/vatsal3030/Chat-network-app" target="_blank" rel="noreferrer">Project repository ↗</a><button data-open="p2p">Read project notes ↗</button></div></div></article>
>       <div class="page-cta"><h2>One problem at a time.<br /><em>What should we build next?</em></h2><a class="button button-primary" href="index.html#contact">Let’s talk <span>↗</span></a></div>
>     </div>
>   </main>
>   <footer class="site-footer page-shell"><a class="brand" href="index.html#top"><span class="brand-mark">V<span>.</span></span><span>VATSAL VADGAMA</span></a><span>COMPUTER SCIENCE · PRODUCT ENGINEERING · INDIA</span><span>© <span id="year">2026</span> BUILT WITH INTENT.</span><a href="#top" class="back-top">BACK TO TOP ↑</a></footer>
>   <dialog class="project-dialog" aria-labelledby="dialog-title"><button class="dialog-close" aria-label="Close project details">×</button><span class="eyebrow" id="dialog-kicker"></span><h2 id="dialog-title"></h2><p id="dialog-description"></p><div class="dialog-points" id="dialog-points"></div><div class="dialog-links" id="dialog-links"></div></dialog>
>   <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/gsap.min.js"></script><script src="https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/ScrollTrigger.min.js"></script><script src="https://unpkg.com/lenis@1.3.27/dist/lenis.min.js"></script><script src="app.js"></script>
> </body>
> </html>
> '@ | Set-Content work.html
> @'
> <!doctype html>
> <html lang="en">
> <head>
>   <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="theme-color" content="#111310" />
>   <meta name="description" content="Vatsal Vadgama, a computer science undergraduate at Nirma University who builds full-stack products and backend systems." />
>   <title>About — Vatsal Vadgama</title>
>   <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
>   <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" /><link rel="stylesheet" href="styles.css" />
> </head>
> <body>
>   <div class="grain" aria-hidden="true"></div>
>   <header class="site-header"><a class="brand" href="index.html#top" aria-label="Vatsal Vadgama home"><span class="brand-mark">V<span>.</span></span><span>VATSAL VADGAMA</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span class="sr-only">Toggle menu</span></button><nav id="primary-nav" class="primary-nav" aria-label="Main navigation"><a href="work.html">Work</a><a href="about.html" aria-current="page">About</a><a href="#journey">Journey</a><a href="index.html#contact">Contact <span class="arrow">↗</span></a></nav></header>
>   <div class="scroll-progress" aria-hidden="true"><span></span></div>
>   <main>
>     <section class="page-hero page-shell"><span class="eyebrow">THE PERSON / THE PERSPECTIVE</span><h1>Understand the problem.<br /><em>Build the whole thing.</em></h1><p>I’m Vatsal Vadgama, a computer science undergraduate at Nirma University. I like moving between product intent and implementation—then staying close enough to the details to make the system dependable.</p><nav class="story-nav" aria-label="On this page"><a href="#story">My approach</a><a href="#journey">Journey</a><a href="#capabilities">Capabilities</a><a href="#education">Education</a></nav></section>
>     <section class="page-shell about-story-grid" id="story"><h2>Curiosity, made<br /><em>practical.</em></h2><div class="about-story-copy"><p>The work I enjoy begins with understanding what someone is trying to do. From there I can shape a useful flow, choose a system design that fits, and make the pieces work together—from the interface through the API and data layer.</p><p>My projects have taken me through full-stack product engineering, backend and real-time systems, biometric access, and applied machine learning. Each has been a way to make coursework and curiosity tangible: something people can use, a workflow that holds together, or a result we can learn from.</p><p>I’m currently focused on software engineering internships and teams where I can contribute across the stack, learn from experienced engineers, and work on products with real users.</p><div class="principles"><article><span>01</span><h3>Start with context</h3><p>Understand the people, constraints, and edge cases first.</p></article><article><span>02</span><h3>Connect the layers</h3><p>Design interfaces, APIs, and data as one product.</p></article><article><span>03</span><h3>Finish with care</h3><p>Consider performance, security, and failure paths.</p></article></div></div></section>
>     <section class="page-shell section-pad" id="journey"><div class="section-heading"><span class="eyebrow">THE JOURNEY SO FAR</span><span class="eyebrow muted">LEARNING BY BUILDING</span></div><div class="journey-list timeline">
>       <article class="timeline-item"><span class="timeline-date">2023 — 2027</span><div><h3>B.Tech, Computer Science & Engineering</h3><p>Institute of Technology, Nirma University · Ahmedabad. Building a foundation in computer science while exploring software through projects and collaborative work.</p><small>CGPA 8.34 / 10</small></div><span class="timeline-status">IN PROGRESS</span></article>
>       <article class="timeline-item"><span class="timeline-date">2026</span><div><h3>Full Stack Developer Intern</h3><p>ChemiCrown Trading Co. · Worked on a B2B commerce and ERP platform for industrial chemical distribution.</p><small>CATALOG · INVENTORY · ORDERS · PAYMENTS</small></div><span class="timeline-status">INTERNSHIP</span></article>
>       <article class="timeline-item"><span class="timeline-date">2025</span><div><h3>HackNUthon 6.0 finalist</h3><p>Collaborated on the Reve digital farming track, building a pipeline for soil spectrometer data and evaluating prediction models.</p><small>TOP 10 FINALIST · TEAM PROJECT</small></div><span class="timeline-status">MILESTONE</span></article>
>       <article class="timeline-item"><span class="timeline-date">2025</span><div><h3>Collaborative hackathon builds</h3><p>Continued building and presenting with teams at MINeD and Build with India hackathons.</p><small>IDEATE · BUILD · PRESENT</small></div><span class="timeline-status">MILESTONE</span></article>
>       <article class="timeline-item"><span class="timeline-date">2023</span><div><h3>Secondary education</h3><p>Mahatma Gandhi Educational Campus, Rajkot · 12th GSEB.</p><small>96 PERCENTILE</small></div><span class="timeline-status">COMPLETED</span></article>
>     </div></section>
>     <section class="page-shell section-pad" id="capabilities"><div class="section-heading"><span class="eyebrow">DEPTH & RANGE</span><span class="eyebrow muted">TOOLS FOLLOW THE PROBLEM</span></div><div class="toolkit" id="education"><div><span class="eyebrow">WHAT I’M BUILDING ON</span><p>Strong fundamentals across the stack, with room to keep learning.</p></div><div class="toolkit-groups"><div><b>LANGUAGES</b><span>C++</span><span>JavaScript</span><span>Python</span></div><div><b>FRONTEND</b><span>React</span><span>Vite</span><span>Tailwind CSS</span><span>Responsive UI</span></div><div><b>BACKEND</b><span>Node.js</span><span>Express</span><span>REST APIs</span><span>Prisma</span></div><div><b>DATA & SYSTEMS</b><span>PostgreSQL</span><span>MongoDB</span><span>Redis</span><span>Docker</span><span>Kubernetes</span><span>Celery</span></div><div><b>APPLIED WORK</b><span>Scikit-learn</span><span>CatBoost</span><span>LightGBM</span><span>Computer vision</span></div><div><b>PROBLEM SOLVING</b><span>LeetCode 1,645</span><span>Codeforces 1,155</span></div></div></div><div class="page-cta"><h2>See the ideas<br /><em>put into practice.</em></h2><a class="button button-primary" href="work.html">Explore selected work <span>↗</span></a></div></section>
>   </main>
>   <footer class="site-footer page-shell"><a class="brand" href="index.html#top"><span class="brand-mark">V<span>.</span></span><span>VATSAL VADGAMA</span></a><span>COMPUTER SCIENCE · PRODUCT ENGINEERING · INDIA</span><span>© <span id="year">2026</span> BUILT WITH INTENT.</span><a href="#top" class="back-top">BACK TO TOP ↑</a></footer>
>   <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/gsap.min.js"></script><script src="https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/ScrollTrigger.min.js"></script><script src="https://unpkg.com/lenis@1.3.27/dist/lenis.min.js"></script><script src="app.js"></script>
> </body>
> </html>
> '@ | Set-Content about.html
> @'
> .case-aurapass,.case-p2p{background:radial-gradient(ellipse at 55% 45%,#1d3328,#111512 68%)}
> .case-p2p{background:radial-gradient(ellipse at 55% 45%,#252a3e,#12141a 68%)}
> .case-diagram{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:25px;width:min(78%,460px);border:1px solid #6a7b4e44;background:#111310bf;backdrop-filter:blur(8px);font:9px var(--mono);letter-spacing:.12em;color:#d7ddcc}
> .case-diagram b{font-weight:400;color:var(--lime);padding-left:8px}.case-diagram i{font-style:normal;color:#829267;padding-left:16px}.case-diagram small,.case-image-wrap>small{position:absolute;bottom:12px;left:15px;font:8px var(--mono);letter-spacing:.12em;color:#9ca58e}
> .case-links button{border:0;background:none;color:var(--text);font:10px var(--mono);border-bottom:1px solid #71786a;padding:8px 0;cursor:pointer}
> .case-links button:hover{color:var(--lime);border-color:var(--lime)}
> '@ | Add-Content styles.css`
> - Wrote `./app.js` (+10 -8)
> - Ran `Get-Content app.js | Select-Object -First 56; Get-Content index.html | Select-Object -First 25; Get-Content styles.css | Select-Object -Last 3; Get-Content about.html | Select-Object -First 7; Get-Content work.html | Select-Object -First 7`
> - Ran `$line=0; Get-Content app.js | ForEach-Object { $line++; if($line -ge 64 -and $line -le 112) { '{0}: {1}' -f $line,$_ } }; Select-String -Path app.js -Pattern 'contactForm|siteHeader|document.querySelectorAll\("\[data-open\]' -Context 0,3; Select-String -Path index.html -Pattern 'hero-scene|type="module"' -Context 0,1`
> - Wrote `./about.html` (+1 -1)
> - Wrote `./app.js` (+10 -1)
> - Wrote `./hero-scene.js` (+1 -0)
> - Wrote `./work.html` (+1 -1)
> - Wrote `./about.html` (+1 -1)
> - Wrote `./app.js` (+3 -0)
> - Wrote `./work.html` (+1 -1)
> - Ran `Get-Content index.html | Select-Object -Skip 44 -First 14; Get-Content hero-scene.js | Select-Object -Last 52; Get-Content README.md -Raw`
> - Ran `Get-Content index.html | Select-Object -Skip 50 -First 8`
> - Ran `Get-Content index.html | Select-Object -Skip 57 -First 3`
> - Wrote `./README.md` (+4 -3)
> - Wrote `./hero-scene.js` (+9 -2)
> - Wrote `./index.html` (+1 -1)
> - Ran `Select-String -Path index.html -Pattern 'all-work-link' -Context 1,1; Get-Content index.html | Select-Object -Skip 54 -First 9; Select-String -Path README.md -Pattern 'single-page|Three.js|home, selected'`
> - Ran `@'
> .primary-nav a[aria-current="page"]{color:var(--lime)}
> .all-work-link{display:inline-flex;gap:24px;align-items:center;margin-top:28px;padding:10px 0;border-bottom:1px solid #767d6b;font:10px var(--mono);color:#e2e7d7;letter-spacing:.04em}
> .all-work-link span{color:var(--lime);font-size:15px;transition:transform .25s}
> .all-work-link:hover{color:var(--lime);border-color:var(--lime)}.all-work-link:hover span{transform:translate(3px,-3px)}
> .mini-project-image{object-fit:contain;padding:10px;background:radial-gradient(ellipse at center,#20251c,#10120f 78%);transition:transform .7s cubic-bezier(.2,.75,.25,1)}
> .mini-project:hover .mini-project-image{transform:scale(1.02)}
> .case-copy h2 em{font-style:normal;color:var(--lime)}
> .case-aurapass .case-diagram{border-color:#72d4a34c}.case-p2p .case-diagram{border-color:#9cafff44}.case-p2p .case-diagram b{color:#a8b8ff}
> .case-story .case-links button,.case-story .case-links a{transition:color .2s,border-color .2s}
> .case-story .case-links button:hover,.case-story .case-links a:hover{color:var(--lime);border-color:var(--lime)}
> @media(max-width:700px){.mini-project-image{height:210px;padding:12px}.case-image-wrap{overflow:hidden}}
> '@ | Add-Content styles.css`
>
> </details>
>
> The reference inspection is complete enough to guide the redesign: I checked its home, Work, About, Content, Speaking, and two case-study pages, and verified its hide-on-scroll navigation. I’ve added dedicated Work and About/Journey routes, a real Three.js portrait scene with an image fallback, and full-fit project frames; I’m doing a visual pass on your local page before I wrap up.
>
> <details><summary>Edited 3 files, ran a command, called 2 tools, searched the web</summary>
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.chromeApp=apps.find((app)=>app.id===\"Chrome\");\nglobalThis.chromeWindow=await sky.get_window({id:chromeApp.windows[0].id,app:chromeApp.id});\nawait sky.activate_window({window:chromeWindow});\nglobalThis.state=await sky.get_window_state({window:chromeWindow,include_screenshot:true,include_text:true});\nglobalThis.chromeWindow=state.window;\nnodeRepl.write((state.accessibility?.tree||\"\").split(\"\\n\").filter(line=>/Address and search bar|document .*Vatsal/.test(line)).slice(0,4).join(\"\\n\"));",
>   "title": "Reviewing the current portfolio"
> }
> ```
>
> Error: user input was detected in this window; call get_window_state before continuing
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.state=await sky.get_window_state({window:chromeWindow,include_screenshot:true,include_text:true});\nglobalThis.chromeWindow=state.window;\nnodeRepl.write((state.accessibility?.tree||\"\").split(\"\\n\").filter(line=>/Address and search bar|document .*Vatsal/.test(line)).slice(0,6).join(\"\\n\"));",
>   "title": "Capturing the local portfolio"
> }
> ```
>
> ```text
> {"content":[{"type":"text","text":"\t\t\t\t\t\t\t\t\t17 text field (edit) (settable, string) Address and search bar Description: Press tab then enter to ask AI Mode. Press up or down arrow for auto completions. Type to autocomplete.. Value: github.com/morluto/rea ID: view_1012"},{"type":"image","data":"/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCANgBgADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5/ooopiCirup6dLpzRR3LILh13vCDlos9A3oe+O3GapUAFFFFABRTolDyKpZUycbm6CkZSrFWBDDgg9qAEooooAKK6K30C1+xNNfai0Mq263TRRW/mbY2KhcncOTuBx6VUn0y0ewuLnTb2S4+z7TKksHlEKTjcPmbPOAenUUAZFFFFABRRV+y04XNpLcy3dvbQo6x5lDnLEEjG1W7A0AUKK3dH8PjUZ40W/t8Okrjy8uy7P7ynBAbtWFQAUUUUAFFFausaP8A2VLLDPf2klzEQGhjEhbn3KBeh9aAMqitCx037Xp13decsfkSRR4YcHeWGSewG30qtPayQxtIdrwiRohIjAhmGM49uRzTAgooooAKKt6VYyanqMFnC8aSTNtVpCQucd8A1LpmlT6jBezRPEkVpH5sjSEjj0GAeaAM+ipryD7NdSw+bFNsbb5kTbkb3B7ioaACiiigAooq5bafLcade3qMgitNm8Encd5wMce1AFOirEto8djBdMV8uZ3RQDyCu3Of++hVvQdK/ta4uIvO8nyoHnzt3Z2446j1oAzKKKKACiiigAooooEFFFFAwooooAKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiikAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooYBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKu6Tpd7q939m063eeYKXIXACqO5J4A5HX1FdvP8PrRBAovtYjkmlSEPPpsIhR3O1d7JcuVG4gZ296APO6KKKACiiigAorT0rRbrVLHULiyKSSWSrLJbg/vWj53Oq9wuBuxyAwPQEiRNH2eG31a9le3EkoisozESLog/vCGzwEBXJ5yWA9cAGRRRRQAVe0TUDpWrW16IUnMLbvLfof8D3B7HFUaKAOk1LUIrYxPbWuk3EEq7lb7PtZfUMuTgiuenk82Z5NqJuYnagwo9gPSmUUAFFFFAFyK4MkioILYEnqVwBTb+6Fx5SqgURjaCBgn/D6VVooAKKKKAO5Gn3WoWd9dWML3EVxpkESGMZO9DEGUj1G0msiDTrrSdH1aTU4JLUzxJBCsqkGRjIrHH0CnP4VztFABRRRQAVuafPHB4bumltYbkG7iG2UuAPkfn5WBrDooA9H8LENY6KQoUGC/OB0HK1Bqc1xb27LZ2S3nhtrHChGCxq3dy2D84bPua8/ooAKKKKYBXf+JrYHxa0l/pPl6f8AaI/MvikuGXC9STsx26VwFFIDvYv7b/si8Gu/as/brfy/P9d53bf9np049KzdVuNRm0i+SCa7kghvpllVHYqkZxgMOy5De1cpRTAKKKKAHRu0ciuhIZSCCOxrr/GMMen2bPZuDBrEousA/dVRkD/vqRvyrjqKAO/1Z9Qhv7yTQFuZLhdQdrtbcEtgAeWGA5Kn5+vGadpWs28enRarJGqtpzyW6Qhs/LIwKjPcKu8dOcV59RQB0njJEsDYaPGQxsYyZHHd3IY8flXN0UUAFdL4dlSHwx4heSCOdR9nzHIWCn5z/dIP61zVFAHc6FLZXB0Rpra1tl8258pMsYzJtj253se/v6Va0SbU5GCaxbTx3EdjdBZrjPmSL8nBB5wOcE+vtXnlFAHqtz9uXWrVpio0H7EPtO7HlH5OQ3+193HfHTvXlVXtX1KbVblJ7hY1dY1jAQEDCjA6k1RoAKKKKACiiigAooooAKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooopAFFFFABRRRQAUUUUAFFFFABRRRTAKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooopAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdL/wn3jH/AKGzxB/4Mpv/AIquaooAvavq+pa1crcaxqF5qFwqCNZbqdpWCgkhQWJOMknHuao0UUAFFFFAHT+Bgk39u2ZntoZrvTWhhNzOkCM/mxNje5CjhW6kdK2dCtZPCWmatd6lcaVIX+zeTDa6pbXDyMlzHIRtidiPlQ8kYrz+igAooooAKKKKANvw3/ZduZNR1WedmtJYmhsrclHuSSSf3v8AyzC7RkgE8jGOo0PFepL4ua6192htb+MRJc2rzjEuRt3wKeQowMxjO3II+XIXlKKACiiigAooooAKKKKACiiigAoo600uAehI/KgB1FN8xf7p/OjzF/un86AHUU3zF/un86PMX+6fzoAdRTfMX+6fzo8xf7p/OgB1FN8xf7p/OjzF/un86AHUU3zF/un86PMX+6fzoAdRTfMX+6fzo8xf7p/OmA6im+Yv90/nR5i/3T+dIB1FN8xf7p/OjzF/un86AHUU3zF/un86PMX+6fzpgOopvmL/AHT+dHmL/dP50AOopvmL/dP50eYv90/nQA6im+Yv90/nR5i/3T+dADqKb5i/3T+dHmL/AHT+dADqKb5i/wB0/nR5i/3T+dADqKb5i/3T+dHmL/dP50AOopvmL/dP50eYv90/nQA6im+Yv90/nR5i/wB0/nQA6imGVR/CfzpPOX+4f++v/rUXAkoqPzl/uH/vr/61HnL/AHD/AN9f/WouKxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcLElFR+cv9w/99f/AFqPOX+4f++v/rUXCxJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRdBYkoqPzl/uH/vr/AOtR5y/3D/31/wDWp3QWJKKj85f7h/76/wDrUecv9w/99f8A1qLoLElFR+cv9w/99f8A1qPOX+4f++v/AK1F0FiSio/OX+4f++v/AK1HnL/cP/fX/wBai6CxJRUfnL/cP/fX/wBajzl/uH/vr/61F0FiSio/OX+4f++v/rUecv8AcP8A31/9ai6CxJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXQWJKKj85f7h/wC+v/rUecv9w/8AfX/1qLoLElFR+cv9w/8AfX/1qPOX+4f++v8A61F0FiSio/OX+4f++v8A61HnL/cP/fX/ANai6CxJRUfnL/cP/fX/ANajzl/uH/vr/wCtRdBYkoqPzl/uH/vr/wCtR5y/3D/31/8AWougsSUVH5y/3D/31/8AWo85f7h/76/+tRdBYkoqPzl/uH/vr/61HnL/AHD/AN9f/WougsSUVH5y/wBw/wDfX/1qPOX+4f8Avr/61K6CxJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXCxJRUfnL/cP/fX/ANajzl/uH/vr/wCtRcLElFR+cv8AcP8A31/9ajzl/uH/AL6/+tRcLElFR+cv9w/99f8A1qPOX+4f++v/AK1FwsSUVH5y/wBw/wDfX/1qPOX+4f8Avr/61FwsSUVH5y/3D/31/wDWo85f7h/76/8ArUXHYkoqPzl/uH/vr/61HnL/AHD/AN9f/WouBJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXCxJRUfnL/cP/fX/ANajzl/uH/vr/wCtRcCSio/OX+4f++v/AK1HnL/cP/fX/wBai4ElFR+cv9w/99f/AFqPOX+4f++v/rUXAkoqPzl/uH/vr/61HnL/AHD/AN9f/WouBJRUfnL/AHD/AN9f/Wo85f7h/wC+v/rUXAkoqPzl/uH/AL6/+tR5y/3D/wB9f/WouBJRUfnL/cP/AH1/9ajzl/uH/vr/AOtRcCSio/OX+4f++v8A61HnL/cP/fX/ANai4ElFR+cv9w/99f8A1qPOX+4f++v/AK1FwJKKj85f7h/76/8ArUecv9w/99f/AFqLgSUVH5y/3D/31/8AWo85f7h/76/+tRcCSio/OX+4f++v/rUecv8AcP8A31/9alcCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSio/OX+4f++v/rUecv8AcP8A31/9agCSio/OX+4f++v/AK1HnL/cP/fX/wBagCSio/OX+4f++v8A61HnL/cP/fX/ANagCSio/OX+4f8Avr/61HnL/cP/AH1/9agCSimLKrHB+X9afQAVPDbNIu4naO3HWoK16AKf2P8A6afpR9j/AOmn6VfgiknmjhgjeSWRgiIilmZicAADqTWz4o8Ja74Wa3XX9NmsvtCloi5BD4xnBBIyMjI6jNAHLmzOOH5+lVWBUkEYIrWqlfjDq3qMUAU5CQo9CaiqST7i/U/0qOgAopQCSABkntWnq3h7WdHjSTVtJv7KN+Fa4t3jBPpkjrQBl0UUUAFFTtaXKWaXbW8y2sjmNJihCMwAJUN0JGRx71BQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFKqlmCqCWJwAO9B4OD1oASiiigAooooAKKKKAGv2ptOftTaQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoq5ZRAguwB5wM1coAx6K2Kp3sQADqMc4NAFOiiigAooooAKsRNuQA9RVepYe9AE1a9ZFa9MR9a/s2eFbLSvBEOuKu/UdVDGSRhykauyqi+g4yfUkZ6CvVNSsLXU7Cey1C3juLSddkkUi5VhXzV8NfjhZ+FvB1not/o9xPJZhljlhlUCQFmYZBHy4zjv61znwU+Jdp4Aj1iPULS7u47wxNGsLABCu/ccE99y/lQM4TxbpaaJ4p1fS4pDJHZ3ctursMFgrEAn8q53UP4Px/pW94n1U654j1TVTD5H225ku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BAL5Y9MnpjrQByMQRpUErFIyQGYDJA7nHet/WPC9xommvdas7RNLIEsPLj3x3qDl5FfIwigpzg5LY4KtjnaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr1b4T6xceFW8XWD6XB/aEVhcm8F5GsmRFtHkbSMqNxffyd2E6befKa7bXfEnhjX9VudV1Pw5qkeoXbma5+xavHFE8rcu6o9u5XJJONx60Acte2rCH7fBbSw6bPcSxW5kcOQU2sULADJVZEycDOelUq6PxJrthf6RpelaNpcun2Fi8037+5FxLLLLsDMzBEHSJAAFHSucoA0rP/j3T8f516f4i8Vtf+AYrRtMv47GSC3trVJIgLW2khPzzRSDG95MtuG0Y38lsCvLrFgYcdwa73V/HI1Dw5PYJpvlXt3bWtndXRuCyPHb42bI9oCE7VyckcHAGTQBn6vreg3enzw2HhS2sLlyClwl7PIY8HJAVmIORxzXKXn/Hu34fzrrNY8ca9rFhPZahcWr2023esdhbxHg5GGRARyB0NcjfNiHHdjQBn10nhrxPrHhnS746FeyWM15LGsk8PyyhUDHaH6gEsCQOu0Vzdb/hvVtJsrO9tNd0aXU4J3jkjaG7+zSQsu4cNscEENyCOw9KAO68I+N/Fl3pOt6peeJdVuTpYtnW1nm8yGcSTqjLIjA7l2k8V5TMoSaRBnCsQM13Wl+K/CmlTebY+FtVJ3K7Qza7uhlKsGUSIsClgGAOMjpXBkkkkkknkk0AJUsP8VRVLD/FQBNWhBcLIMNhW/nWfRTEa9FZFFAGq7qgyzAVnXEvmvnGB0AqOigBkn3F+p/pUdSSfcX6n+lR0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UdKKAGydqZT5O1MpDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHxyNG2UOKsi9PdB+dU6KALhvT2T9arSSNIcuc0yigAooooAKKKKACpYf4qiqWH+KgCaiiimIKK6LQPDVzdT2lxqKLbaY7gvLNIse5RycAkHn1FX9Zv57HyXvLLw9fQSlgj26AgbcZXKkEdR1/xoA46itjxRZwWeoRG1QxRXFvHceSSW8ouM7cnrj1rHoAZJ9xfqf6VHUkn3F+p/pUdABRXVfDqC3fWb25ubaG6+w6fc3kcU67o2kjjJTcvcA4OD1xXVaZY3EjR65rpsm1G4sxdNdTwIsGmQE7Y5XiVdssr4bYnHRSQ27AAPK6Kva5eW+oaxeXdlZpY280hdLZG3CMHsDgD8gB6AV2nwq0XQNTsPEt14mtpJbexto5FkjkZWh3MQXAU/MQOcHOcUAee0V2LeEri0stesLy0La3aahaWkQVjz5nm8DsQ21CCf0zUln8PbzULxbbTNX0e9YySwlopJQoljXd5fzRjJYbipGVO1ueKAOKorsbP4e6xdjw+UktFXWo5pYCzsPKSMAs0ny8DBGMZrI8O+HbnXIr64Se1s7GxjElzd3TlY4wchR8oLFmIwAASTQBi0V3h8IQy6DboNa0KIx6lLbm9MjlJy8VuUVSsZYgZfOQApJzjNY+jeFJtS1E6dNqemadqH2lrRLe7kcM8oOCPkRgOSACxAJ6ZwcAHN0V1/iLwxp+meDNC1e21aG4ur5phJGok2tsZQNmYxjbn5tx5ONuRXIUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUgClpKWgApaKKYDJO1Mp8namUhhRRRQAUUUUAFFFFABRRR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kwnfyVlk2S+XgbslgTjdtxkeuKk8NNczM0Ghw6laQy3EZe6ik8wxYB4fCqCvzZ5IHXrQByVFds329NF0o+GC/kCGT7W0J48zHzebnjp03fhUviiW9jh1WO4shPo7iP7FKrhYoR/CY+xyDyB+NAHCUV6G9wNVbxNHqr7rS1u4tijgRKJWDFR2yM5I61l61Frd5LNZanZzSzTXQFnJI+1U65WPPBUjb0OBgetAHNXVn9ntrab7Rby+epbZG+5o8Ho47GqtekQy3kPhnSX0+wnupjZSIJLdsSw5cDcvBP5VxnilJI9fvEmvBeyKwDThQu44GeASMjp+FAGVUslvNHDFNJFIsMufLdlIV8dcHvitTVfsn/CPaH5Hkfads3n7Mb8+Ydu/HPTpntWl4mmluPCHhia4keWVzdlndizMfMHJJ60AcpVu/wBNvtOKDULO5tTJnZ58TJux1xkc9RVrwtcQWviTTJ7zb9njuEZy3QDPU/TrV3V7C80rw/Hb6rbywXM148iJKMMQqgM30JI5744oA52iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCSD/j4i/3h/OtisaD/j4i/wB4fzrZoAK07DVfsmi6rp/k7/t3lfvN2Nmxi3THOfqKzKKAOg1nXbXVoFkutNP9piFYTcLOQh24w2zGd2Bj72PatG48czy6hp119iiHkI6XCFsi5LqquTx8uQo9cEd646igDorbXrOxsdRtNP02SOO8t/IZ5bne+d2dxwoB7DAA+pqSHxOlhDCmj2T2+yeO42z3BmRXQEfIMAruyd3Jzx0xXM0UAbLvoNyQBHqGnhSTkFbovnGByY9oGPcnPtUiX+lRW62c8F5qFpFKZoXLi1dSwAdSP3gKnavQg8H1rCooA6iw8WfZJNAf7Fv/ALKWVcebjzd/4fLj8a6fT9YtILU6vqh09r0ab5AkgvAzykjCqYQMq44DE8cce3mFFAHT634r/tO1vIfsflfaI7ZM+bu2+Vu56DOd34Y70uqeJLLV7y6l1LTJXjknE8aw3QRk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…114930 chars truncated…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DpWoRi4e5hjuSxWB3bc+0K4ypOMq24cD3y1UkrNyXnsHKtdDqH+GN6k8sDTXQeOx+1mY2TC3MmMmISbv1x+Fcx4s8O3Hh3UpbadZ2hLf6PctFtS4TAJZTkg9V6E9ecUl/42Go2ax6hDpNzdrB9nW9kB84J26NtJA4DFcj1qpq3iW2v7VbaC30ywg80zslq7YdyMZO92xgZwBgcmlTnNP35L8BzjFr3Uedz/6+T/eP86ZT5iDNIQcgsaZXzct2eutgooopDCkbO07euOKWigC14f0kaoNV83VLq3Njps+oHdp8bbxHtyoxP1+YdazoQ4c5lnkXHWWBIsH22u2f0rpPCH/M1f8AYs6h/wC0qwqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACobz/j0m/wB2pqhvP+PSb/doA5+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2PD3/Lx/wAB/rVKb/j8uf8Arof5mrvh7/l4/wCA/wBapTf8flz/ANdD/M0AFFFFABRRRQAUUUUAMk+4v1P9Kjf7i/U/0qST7i/U/wBKjf7i/U/0oAjpQSCCCQRyCKSigC1eaheXqoLy7uLgJ90SyFgv0z0qrRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAWLO9urGUSWVzPbyDOGikKEZGDyPUEioCSSSSSTySaSigApyd6bTk70AD9qbTn7U2gAooooAKKKKACiiigAqxp//H7F9ar1Y0//AI/YvrQBvUUUUAFFGDjOOPWigAooooAKKsWtldXau1rbTzrH98xxlgv1x06VXoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKRjtUn0GaWigDptHtrbRI9YfV9f8ADif2jod3ZW4tNRW7PmSeXgOIwdg47/0NYmp6dLpk0cc17ot35ilgdM1GO8C4P8R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","mimeType":"image/jpeg","_meta":{"codex/imageDetail":"original"}}],"isError":false,"_meta":{"codex/nodeReplExecutionDurationMs":2242}}
> ```
>
> Searched the web for `https://sarthak-sharma-portfolio-six.vercel.app/work/javascript-god-mode`
>
> - Wrote `./README.md` (+1 -1)
> - Wrote `./hero-scene.js` (+4 -1)
> - Wrote `./index.html` (+1 -1)
>
> - Ran `Get-Content hero-scene.js | Select-Object -First 5; Get-Content hero-scene.js | Select-Object -Last 9; Select-String -Path index.html -Pattern 'work.html|about.html|hero-scene'; Select-String -Path app.js -Pattern 'case-story|nav-hidden|contactForm\?' -Context 1,1; Get-ChildItem -Force | Select-Object Name,Length`
>
> - Wrote `./index.html` (+1 -1)
>
> </details>
</details>

Yes—I can access and inspect the public reference directly. I reviewed its home page, Work, About, Content, Speaking, and project detail pages, including its hide-on-down/show-on-up navigation. You don’t need to send screenshots unless you want me to match a private or state-specific view. ([Work](https://sarthak-sharma-portfolio-six.vercel.app/work), [About](https://sarthak-sharma-portfolio-six.vercel.app/about), [Content](https://sarthak-sharma-portfolio-six.vercel.app/content), [Speaking](https://sarthak-sharma-portfolio-six.vercel.app/speaking))

I’ve expanded your portfolio with dedicated [Work](./work.html) and [About/Journey](./about.html) pages, added the hide-on-scroll navigation, and replaced the static hero treatment with an interactive Three.js particle portrait plus an image fallback. Project screenshots now fit inside their frames instead of being cropped. The relevant changes are in [index.html](./index.html), [styles.css](./styles.css), [app.js](./app.js), and [hero-scene.js](./hero-scene.js).

I haven’t verified these edits in a local browser or run a performance audit yet, so I can’t call this pixel-perfect or device-verified.

> still not get exact look and you not properly reverser enginered . user REA repo for better revreser enginer this . [https://github.com/morluto/rea](https://github.com/morluto/rea) . more poilished and pixel perffact animation and specially responsiveness needed . also  use lighthouse for get better sttas of performances .

<details><summary>19 previous messages</summary>

> I’ll inspect `morluto/rea` and compare its structure and motion patterns with the current portfolio, then use Lighthouse if the available browser/tooling can run it without altering the project’s dependency setup. I’ll focus the next pass on the reference’s actual layout and responsive behavior, not just adding effects.
>
> <details><summary>Ran 8 commands, searched the web</summary>
>
> Searched the web for `https://github.com/morluto/rea`
>
> - Ran `Get-ChildItem -Force | Select-Object Name,Mode,Length; Get-Command lighthouse -ErrorAction SilentlyContinue | Select-Object Source,Name; Get-Command npm,npx,node,chrome -ErrorAction SilentlyContinue | Select-Object Name,Source; Get-ChildItem 'C:\Program Files\Google\Chrome\Application\chrome.exe' -ErrorAction SilentlyContinue | Select-Object FullName; Get-ChildItem 'C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe' -ErrorAction SilentlyContinue | Select-Object FullName`
>
> - Ran `node --version`
>
> - Ran `Get-ChildItem -Force node_modules -ErrorAction SilentlyContinue | Select-Object -First 4 Name`
>
> - Ran `npm --version`
>
> Searched the web for `site:github.com/morluto/rea "analyze-website" ...`
>
> - Ran `npx --no-install lighthouse --version`
>
> Searched the web for `site:github.com/GoogleChrome/lighthouse file:// CLI support Lighthouse ...`
>
> - Ran `Get-Command python,py,cwebp,magick -ErrorAction SilentlyContinue | Select-Object Name,Source; python -c "from PIL import Image; print('pillow available')" 2>$null`
>
> - Ran `$env:npm_config_cache='C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache'; npx --yes lighthouse@12.8.2 --version`
>
> - Ran `Get-NetTCPConnection -LocalPort 8766 -State Listen -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,OwningProcess`
>
> </details>
>
> The REA repository confirms its browser-inspection tools require a Node 22+ runtime and a configured MCP server; this workspace currently has Node 20 and no REA server registered. I can still use the repo’s documented inspection approach against the public pages. Lighthouse’s current CLI also requires Node 22+, so I’m checking whether the installed browser tooling can produce a report without changing the project’s dependencies.
>
> <details><summary>Ran 14 commands</summary>
>
> - Ran `$env:npm_config_cache='C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache'; npx --yes lighthouse@12.8.2 --version`
> - Ran `Get-Process chrome -ErrorAction SilentlyContinue | Select-Object -First 3 Name,Path`
> - Ran `Get-Process brave -ErrorAction SilentlyContinue | Select-Object -First 3 Name,Path`
> - Ran `where.exe brave.exe; where.exe chrome.exe`
> - Ran `Get-ChildItem 'C:\Users\VATSAL\AppData\Local\Google\Chrome\Application\chrome.exe','C:\Users\VATSAL\AppData\Local\BraveSoftware\Brave-Browser\Application\brave.exe','C:\Program Files (x86)\Google\Chrome\Application\chrome.exe','C:\Program Files\Google\Chrome\Application\chrome.exe','C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe' -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName`
> - Ran `$env:npm_config_cache='C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache'; npx --yes lighthouse@12.8.2 http://127.0.0.1:8766/ --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --output=json --output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-before-mobile.json --chrome-path='C:\Program Files\Google\Chrome\Application\chrome.exe' --chrome-flags='--headless=new --no-sandbox --disable-gpu' --quiet`
> - Ran `Invoke-WebRequest -Uri 'http://127.0.0.1:8766/' -Method Head -TimeoutSec 4 | Select-Object StatusCode,Headers`
> - Ran `$env:npm_config_cache='C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache'; npx --yes lighthouse@12.8.2 file:///E:/portfolio/index.html --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --output=json --output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-before-mobile.json --chrome-path='C:\Program Files\Google\Chrome\Application\chrome.exe' --chrome-flags='--headless=new --no-sandbox --disable-gpu' --quiet`
> - Ran `Get-Process python,python3 -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,StartTime,Path; Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object LocalPort -eq 8766 | Select-Object LocalAddress,LocalPort,OwningProcess`
> - Ran `Start-Process -FilePath 'C:\Python314\python.exe' -ArgumentList @('-m','http.server','8766','--bind','127.0.0.1') -WindowStyle Hidden -PassThru | Select-Object Id,ProcessName`
> - Ran `Get-NetTCPConnection -LocalPort 8766 -State Listen -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,OwningProcess`
> - Ran `Get-Process -Id 31336 -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,HasExited,Path; Get-WinEvent -LogName Application -MaxEvents 3 -ErrorAction SilentlyContinue | Select-Object -First 1`
> - Ran `Start-Process -FilePath 'C:\Python314\python.exe' -ArgumentList @('-m','http.server','8766','--bind','127.0.0.1') -WindowStyle Hidden -RedirectStandardOutput 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview.out' -RedirectStandardError 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview.err' -PassThru | Select-Object Id,ProcessName`
> - Ran `Get-Content 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview.err' -ErrorAction SilentlyContinue; Get-Content 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview.out' -ErrorAction SilentlyContinue; Get-Process -Id 33604 -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,Path`
>
> </details>
>
> The Lighthouse CLI installed in a temporary cache, but the local preview isn’t accepting browser connections, so its audit stops at Chrome’s interstitial. I’m optimizing the project images and tightening the 3D load path while I check whether the environment will allow a proper local Lighthouse run.
>
> <details><summary>Ran 5 commands</summary>
>
> - Ran `python -c "from PIL import Image; from pathlib import Path; files=[Path('assets/vatsal-portrait.png'),*Path('assets/projects').glob('*.png')]; print('\n'.join(f'{p.as_posix()} {Image.open(p).size} {p.stat().st_size}' for p in files))"; Get-ChildItem assets -Recurse -File | Measure-Object Length -Sum | Select-Object Count,Sum`
> - Ran `python -c "from PIL import Image; from pathlib import Path; import io; files=[Path('assets/vatsal-portrait.png'),*Path('assets/projects').glob('*.png')]; rows=[];\nfor p in files:\n im=Image.open(p); q=io.BytesIO(); im.save(q,format='WEBP',quality=92,method=6); loss=io.BytesIO(); im.save(loss,format='WEBP',lossless=True,method=6); rows.append(f'{p.name}: original={p.stat().st_size}, q92={q.tell()}, lossless={loss.tell()}');\nprint('\\n'.join(rows))"`
> - Ran `@'
> from PIL import Image
> from pathlib import Path
> import io
> files = [Path('assets/vatsal-portrait.png'), *Path('assets/projects').glob('*.png')]
> for path in files:
>     image = Image.open(path)
>     lossy, lossless = io.BytesIO(), io.BytesIO()
>     image.save(lossy, format='WEBP', quality=92, method=6)
>     image.save(lossless, format='WEBP', lossless=True, method=6)
>     print(f'{path.name}: original={path.stat().st_size}, q92={lossy.tell()}, lossless={lossless.tell()}')
> '@ | python -`
> - Ran `@'
> from PIL import Image
> from pathlib import Path
> import io
> files = [Path('assets/vatsal-portrait.png'), *Path('assets/projects').glob('*.png')]
> for path in files:
>     image = Image.open(path)
>     output = io.BytesIO()
>     image.save(output, format='WEBP', quality=92, method=4)
>     print(f'{path.name}: original={path.stat().st_size}, webp-q92={output.tell()}')
> '@ | python -`
> - Ran `@'
> from PIL import Image
> from pathlib import Path
> sources = [Path('assets/vatsal-portrait.png'), *Path('assets/projects').glob('*.png')]
> for source in sources:
>     target = source.with_suffix('.webp')
>     Image.open(source).save(target, format='WEBP', quality=92, method=4)
>     print(f'{target.as_posix()} {target.stat().st_size}')
> '@ | python -`
>
> </details>
>
> Viewed 2 images
>
> <details><summary>Edited 4 files, ran 6 commands</summary>
>
> - Ran `Select-String -Path index.html,work.html,about.html,app.js,hero-scene.js -Pattern '\.png'`
> - Ran `@'
> from pathlib import Path
> for name in ('index.html', 'work.html'):
>     path = Path(name)
>     source = path.read_text(encoding='utf-8')
>     source = source.replace('.png', '.webp')
>     source = source.replace('loading="lazy" />', 'loading="lazy" decoding="async" />')
>     source = source.replace('fetchpriority="high" />', 'fetchpriority="high" decoding="async" />')
>     path.write_text(source, encoding='utf-8')
> '@ | python -`
> - Wrote `./about.html` (+1 -0)
> - Wrote `./hero-scene.js` (+4 -1)
> - Wrote `./index.html` (+3 -0)
> - Wrote `./work.html` (+1 -0)
> - Wrote `./hero-scene.js` (+14 -8)
> - Ran `$env:npm_config_cache='C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache'; npx --yes lighthouse@12.8.2 http://127.0.0.1:8766/ --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --output=json --output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-before-mobile.json --chrome-path='C:\Program Files\Google\Chrome\Application\chrome.exe' --chrome-flags='--headless=new --no-sandbox --disable-gpu' --quiet`
> - Ran `Invoke-WebRequest -Uri 'http://127.0.0.1:8766/' -Method Head -TimeoutSec 5 | Select-Object StatusCode,Headers`
> - Ran `Get-NetTCPConnection -LocalPort 8766 -State Listen -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,OwningProcess`
> - Ran `Get-Process python -ErrorAction SilentlyContinue | Select-Object Id,ProcessName,Path; netstat -ano | Select-String ':8766'`
>
> </details>
>
> The existing portrait and dashboard images convert cleanly to WebP at about 0.88 MB total, down from 4.57 MB, with the dashboard text still legible. I’m bringing the opening composition closer to the reference now: centered portrait, name-led headline, concise intro, and a scroll sequence that gives each project more room.
>
> <details><summary>Edited a file, ran 8 commands</summary>
>
> - Wrote `./index.html` (+3 -3)
> - Ran `@'
>
> /* Centered, portrait-led opening and keyboard access */
> .skip-link{position:fixed;z-index:100;left:16px;top:12px;padding:10px 14px;background:var(--lime);color:#111310;font:11px var(--mono);transform:translateY(-160%);transition:transform .2s}
> .skip-link:focus{transform:translateY(0)}
> .hero{min-height:930px;overflow:hidden;justify-content:space-between}
> .hero-decoration{width:min(500px,48vw);height:470px;left:50%;right:auto;top:1%;transform:translateX(-50%);opacity:1}
> .hero-scene{overflow:visible}
> .hero-topline{position:relative;z-index:3;padding-top:8px}
> .hero-copy{width:100%;max-width:1180px;margin:420px auto 24px;display:flex;flex-direction:column;align-items:center;text-align:center}
> .hero-kicker{margin:0 0 13px;font:9px var(--mono);letter-spacing:.15em;color:#d2ef9c}
> .hero h1{max-width:none;font-size:clamp(78px,11.2vw,150px);line-height:.88;letter-spacing:-.09em;text-align:center}
> .hero-line{margin:0}.hero-line-inner{width:100%}
> .hero-bottom{flex-direction:column;align-items:center;gap:17px;margin-top:22px}
> .hero-description{max-width:560px;text-align:center;font-size:15px;line-height:1.75}
> .hero-actions{justify-content:center;gap:27px}
> .hero-index{margin-top:0}
> @media(max-width:1000px){.hero{min-height:860px}.hero-decoration{width:min(460px,58vw);height:430px}.hero-copy{margin-top:390px}.hero h1{font-size:clamp(72px,12vw,126px)}}
> @media(max-width:700px){
>   .hero{min-height:780px;padding-top:16px}
>   .hero-topline{gap:8px;align-items:center}
>   .hero-topline .eyebrow{font-size:7px}
>   .hero-topline .eyebrow:last-child{text-align:right}
>   .hero-decoration{width:310px;height:355px;top:0;opacity:.92}
>   .hero-copy{margin:318px auto 20px;padding-inline:2px}
>   .hero-kicker{max-width:300px;margin-bottom:11px;font-size:7px;line-height:1.5}
>   .hero h1{font-size:clamp(57px,13.4vw,91px);line-height:.91}
>   .hero-bottom{gap:14px;margin-top:18px}
>   .hero-description{max-width:350px;font-size:13px;line-height:1.65}
>   .hero-actions{width:100%;gap:15px;flex-wrap:wrap}
>   .hero-actions .button{gap:14px}
>   .hero-actions .text-link{padding-block:10px}
>   .hero-index{margin-top:0;padding:15px 0}
>   .hero-index span{font-size:7px}
> }
> '@ | Add-Content styles.css`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root = Path.cwd()
> server = ThreadingHTTPServer(('127.0.0.1', 8767), partial(SimpleHTTPRequestHandler, directory=str(root)))
> thread = threading.Thread(target=server.serve_forever, daemon=True)
> thread.start()
> command = [
>     'node', r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js',
>     'http://127.0.0.1:8767/', '--only-categories=performance,accessibility,best-practices,seo',
>     '--form-factor=mobile', '--output=json',
>     '--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-after-mobile.json',
>     r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe',
>     '--chrome-flags=--headless=new --no-sandbox --disable-gpu', '--quiet'
> ]
> try:
>     result = subprocess.run(command, cwd=root, text=True, capture_output=True, timeout=150)
>     print(f'LIGHTHOUSE_EXIT={result.returncode}')
>     print(result.stdout[-2000:])
>     print(result.stderr[-3000:])
> finally:
>     server.shutdown()
>     server.server_close()
> '@ | python -`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root = Path.cwd()
> server = ThreadingHTTPServer(('127.0.0.1', 8767), partial(SimpleHTTPRequestHandler, directory=str(root)))
> thread = threading.Thread(target=server.serve_forever, daemon=True)
> thread.start()
> command = [
>     'node', r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js',
>     'http://127.0.0.1:8767/', '--only-categories=performance,accessibility,best-practices,seo',
>     '--form-factor=mobile', '--output=json',
>     r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-after-mobile.json',
>     r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe',
>     '--chrome-flags=--headless=new --no-sandbox --disable-gpu', '--quiet'
> ]
> try:
>     result = subprocess.run(command, cwd=root, text=True, capture_output=True, timeout=150)
>     print(f'LIGHTHOUSE_EXIT={result.returncode}')
>     print(result.stdout[-2000:])
>     print(result.stderr[-3000:])
> finally:
>     server.shutdown()
>     server.server_close()
> '@ | python -`
> - Ran `@'
> import json
> from pathlib import Path
> report = json.loads(Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-after-mobile.json').read_text(encoding='utf-8'))
> for name, category in report['categories'].items(): print(f'{name}: {round(category["score"]*100)}')
> for name in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift','interactive','uses-responsive-images','modern-image-formats','image-delivery-insight']:
>     audit=report['audits'].get(name)
>     if audit: print(f'{name}: {audit.get("displayValue", audit.get("scoreDisplayMode"))} [{audit.get("score")}]')
> '@ | python -`
> - Ran `@'
> import json
> from pathlib import Path
> r=json.loads(Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-after-mobile.json').read_text(encoding='utf-8'))
> for a in r['audits'].values():
>     if a.get('details',{}).get('type')=='opportunity' and a.get('score',1)<1:
>         print(f'{a.get("title")}: {a.get("displayValue","")} (score={a.get("score")})')
>         for item in a['details'].get('items',[])[:3]:
>             print(' ', item.get('url') or item.get('label') or item.get('node',{}).get('snippet',''))
> '@ | python -`
> - Ran `@'
> import json
> from pathlib import Path
> r=json.loads(Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-after-mobile.json').read_text(encoding='utf-8'))
> for name, audit in r['audits'].items():
>     if audit.get('score') is not None and audit.get('score') < 1 and audit.get('scoreDisplayMode') not in ('notApplicable','informative','manual'):
>         if audit.get('details',{}).get('type')=='opportunity': continue
>         print(f'{name}: {audit.get("title")} (score={audit.get("score")})')
>         for item in audit.get('details',{}).get('items',[])[:2]: print(' ', item.get('node',{}).get('snippet') or item.get('url') or '')
> '@ | python -`
> - Ran `@'
> from PIL import Image
> from pathlib import Path
> for source in [Path('assets/projects/vixora-dashboard.webp'), Path('assets/projects/chemicrown-cdms.webp'), Path('assets/projects/elevara.webp'), Path('assets/projects/bookit.webp')]:
>     image = Image.open(source)
>     for width in (720, 1280):
>         if image.width <= width: continue
>         resized = image.resize((width, round(image.height * width / image.width)), Image.Resampling.LANCZOS)
>         target = source.with_name(f'{source.stem}-{width}.webp')
>         resized.save(target, format='WEBP', quality=92, method=4)
>         print(f'{target.name} {target.stat().st_size}')
> source = Path('assets/projects/soil-analysis.webp')
> image = Image.open(source)
> small = image.resize((640, 640), Image.Resampling.LANCZOS)
> target = source.with_name('soil-analysis-640.webp')
> small.save(target, format='WEBP', quality=92, method=4)
> print(f'{target.name} {target.stat().st_size}')
> source = Path('assets/vatsal-portrait.webp')
> image = Image.open(source)
> for width in (420, 840):
>     resized = image.resize((width, width), Image.Resampling.LANCZOS)
>     target = source.with_name(f'{source.stem}-{width}.webp')
>     resized.save(target, format='WEBP', quality=92, method=4)
>     print(f'{target.name} {target.stat().st_size}')
> '@ | python -`
> - Ran `@'
> from pathlib import Path
> import re
> references = {
>     'vixora-dashboard': (720, 1280, 1919),
>     'chemicrown-cdms': (720, 1280, 1917),
>     'elevara': (720, 1280, 1906),
>     'bookit': (720, 1280, 1919),
>     'soil-analysis': (640, 1024, 1024),
> }
> sizes = '(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 50vw, 700px'
> for name in ('index.html', 'work.html'):
>     path = Path(name)
>     html = path.read_text(encoding='utf-8')
>     for stem, widths in references.items():
>         src = f'assets/projects/{stem}.webp'
>         candidates = []
>         if stem == 'soil-analysis':
>             candidates = [f'assets/projects/{stem}-640.webp 640w', f'{src} 1024w']
>         else:
>             candidates = [f'assets/projects/{stem}-{width}.webp {width}w' for width in widths[:2]] + [f'{src} {widths[2]}w']
>         replacement = f'src="assets/projects/{stem}-{widths[0]}.webp" srcset="{", ".join(candidates)}" sizes="{sizes}"'
>         html = html.replace(f'src="{src}"', replacement)
>     if name == 'index.html':
>         html = html.replace('src="assets/vatsal-portrait.webp"', 'src="assets/vatsal-portrait-420.webp" srcset="assets/vatsal-portrait-420.webp 420w, assets/vatsal-portrait-840.webp 840w, assets/vatsal-portrait.webp 1254w" sizes="(max-width: 700px) 310px, 500px"')
>     path.write_text(html, encoding='utf-8')
> '@ | python -`
>
> </details>
>
> Context compaction
>
> Source: automatic
> Status: completed
>
> I’ll finish the responsive image and accessibility fixes, then rerun Lighthouse on the updated site and report the measured scores with the local-server caveat.
>
> <details><summary>Edited a file, ran 6 commands</summary>
>
> - Ran `Select-String -Path index.html,work.html,about.html -Pattern 'srcset|\.png|portrait.webp|aria-label="Vatsal Vadgama home"|lenis|<script|favicon'`
> - Ran `Get-Content hero-scene.js; Get-Content index.html -TotalCount 20; Get-Content styles.css -Tail 20; Get-Content app.js -TotalCount 70;`
> - Ran `Select-String -Path index.html,work.html,about.html -Pattern '<script|<link rel="stylesheet"|aria-label="Vatsal Vadgama home"' | ForEach-Object { $_.Path + ':' + $_.LineNumber + ':' + $_.Line.Trim() }; Select-String -Path styles.css -Pattern ':root|--dim' | Select-Object -First 3 | ForEach-Object { $_.Line }`
> - Wrote `./hero-scene.js` (+6 -2)
> - Ran `@'
> from pathlib import Path
> for name in ['index.html','work.html','about.html']:
>     p=Path(name); s=p.read_text(encoding='utf-8')
>     s=s.replace('<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.27/dist/lenis.css" />','')
>     s=s.replace(' aria-label="Vatsal Vadgama home"','')
>     # Add local icon alongside main stylesheet.
>     if 'assets/favicon.svg' not in s:
>         s=s.replace('<link rel="stylesheet" href="styles.css" />','<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />\n    <link rel="stylesheet" href="styles.css" />')
>         s=s.replace('<link rel="stylesheet" href="styles.css" />','<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" /><link rel="stylesheet" href="styles.css" />')
>     # Defer ordered vendor and local scripts to avoid blocking HTML parsing.
>     s=s.replace('<script src=', '<script defer src=')
>     s=s.replace('<script defer defer src=', '<script defer src=')
>     p.write_text(s,encoding='utf-8')
> p=Path('index.html'); s=p.read_text(encoding='utf-8').replace('href="assets/vatsal-portrait.webp" fetchpriority="high"','href="assets/vatsal-portrait-840.webp" fetchpriority="high"'); p.write_text(s,encoding='utf-8')
> '@ | python -
> @'
> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#111310"/><path d="M12 12h12l11 27 11-27h12L41 52H29z" fill="#f2f0e8"/><path d="M45 45h9v9h-9z" fill="#c8f169"/></svg>
> '@ | Set-Content -Encoding utf8 assets/favicon.svg`
> - Ran `@'
> /* Lenis base rules kept local to avoid a render-blocking third-party stylesheet. */
> .lenis.lenis-smooth{scroll-behavior:auto!important}
> .lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}
> .lenis.lenis-stopped{overflow:clip}
> .lenis.lenis-scrolling iframe{pointer-events:none}
> :root{--dim:#969b8d}
> '@ | Add-Content styles.css
> Select-String -Path index.html,work.html,about.html -Pattern 'favicon|lenis.css|<script|aria-label="Vatsal Vadgama home"' | ForEach-Object { $_.Path + ':' + $_.LineNumber + ':' + $_.Line.Substring(0,[Math]::Min(200,$_.Line.Length)) }
> Get-Item assets/favicon.svg | Select-Object FullName,Length`
> - Ran `Get-Content index.html -TotalCount 20; Get-Content work.html -TotalCount 13; Get-Content about.html -TotalCount 12`
>
> </details>
>
> The key performance issue is clearer now: the custom Three.js portrait was being downloaded even on mobile, where its animation cannot be meaningfully used. I’ve gated it to motion-capable desktop pointers, added responsive image variants and local favicon/Lenis CSS, and am cleaning up a duplicate icon link before the audit.
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `@'
> from pathlib import Path
> for name in ['index.html','work.html','about.html']:
>     p=Path(name); s=p.read_text(encoding='utf-8')
>     s=s.replace('    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />\n    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" /><link rel="stylesheet" href="styles.css" />', '    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />\n    <link rel="stylesheet" href="styles.css" />')
>     s=s.replace('  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />\n    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" /><link rel="stylesheet" href="styles.css" />', '  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />\n  <link rel="stylesheet" href="styles.css" />')
>     p.write_text(s,encoding='utf-8')
> '@ | python -
> Select-String -Path index.html,work.html,about.html -Pattern 'favicon|lenis.css' | ForEach-Object { $_.Path + ':' + $_.LineNumber + ':' + $_.Line.Trim() }`
> - Ran `@'
> from pathlib import Path
> p=Path('about.html');s=p.read_text(encoding='utf-8').replace('<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />\n    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" /><link rel="stylesheet" href="styles.css" />','<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" /><link rel="stylesheet" href="styles.css" />');p.write_text(s,encoding='utf-8')
> '@ | python -`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root=Path.cwd()
> server=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)))
> thread=threading.Thread(target=server.serve_forever,daemon=True); thread.start()
> command=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=mobile','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  result=subprocess.run(command,cwd=root,text=True,capture_output=True,timeout=150)
>  print(f'LIGHTHOUSE_EXIT={result.returncode}')
>  print(result.stdout[-1000:]); print(result.stderr[-2000:])
> finally:
>  server.shutdown(); server.server_close()
> '@ | python -`
> - Ran `@'
> import json
> p=r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile.json'
> r=json.load(open(p,encoding='utf-8'))
> for k,v in r['categories'].items(): print(f'{k}: {round(v["score"]*100)}')
> print('METRICS')
> for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift','interactive']:
>  a=r['audits'].get(k,{})
>  print(k, a.get('displayValue'), a.get('score'))
> print('FAILED/IMPROVE')
> for k,a in r['audits'].items():
>  if a.get('score') is not None and a['score']<.9 and a.get('details',{}).get('type')!='opportunity': print(k, a.get('score'),a.get('title'),a.get('displayValue',''))
> print('OPPORTUNITIES')
> for k,a in r['audits'].items():
>  if a.get('details',{}).get('type')=='opportunity' and a.get('score') not in (None,1): print(k, a.get('title'),a.get('displayValue',''))
> '@ | python -`
>
> </details>
>
> The updated mobile Lighthouse run now scores **91 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO**. The portrait image and favicon load locally, and the mobile run no longer downloads Three.js. I’m checking a desktop profile too so the performance picture covers both device classes.
>
> <details><summary>Ran 5 commands</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root=Path.cwd()
> server=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)))
> thread=threading.Thread(target=server.serve_forever,daemon=True); thread.start()
> command=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=desktop','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  result=subprocess.run(command,cwd=root,text=True,capture_output=True,timeout=150)
>  print(f'LIGHTHOUSE_EXIT={result.returncode}')
>  print(result.stdout[-500:]); print(result.stderr[-800:])
> finally:
>  server.shutdown(); server.server_close()
> '@ | python -`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root=Path.cwd(); server=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)))
> thread=threading.Thread(target=server.serve_forever,daemon=True); threading.Thread(target=server.serve_forever,daemon=True).start()
> command=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--preset=desktop','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(command,cwd=root,text=True,capture_output=True,timeout=150); print('LIGHTHOUSE_EXIT='+str(r.returncode)); print(r.stderr[-1800:])
> finally: server.shutdown(); server.server_close()
> '@ | python -`
> - Ran `@'
> import json
> for label,p in [('mobile',r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile.json'),('desktop',r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json')]:
>  r=json.load(open(p,encoding='utf-8'))
>  print(label, {k:round(v['score']*100) for k,v in r['categories'].items()})
>  for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift']:
>   a=r['audits'].get(k,{}); print(' ',k,a.get('displayValue'))
> '@ | python -
> git status --short
> Select-String -Path index.html,app.js -Pattern 'form|mailto|formsubmit|emailjs|contact' | Select-Object -Last 12 | ForEach-Object { $_.Path + ':' + $_.LineNumber + ':' + $_.Line.Trim() }`
> - Ran `@'
> import json
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json',encoding='utf-8'))
> for k,a in r['audits'].items():
>  if k in ['errors-in-console','is-on-https','uses-http2','uses-rel-preload','uses-rel-preconnect'] or (a.get('score') is not None and a['score']<1 and k.startswith('no-')):
>   print(k,a.get('score'),a.get('title'),a.get('displayValue'),a.get('description','')[:160])
> '@ | python -
> Get-ChildItem -Force | Select-Object Name,Mode | Select-Object -First 30`
> - Ran `@'
> import json
> for p in [r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile.json',r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json']:
>  r=json.load(open(p,encoding='utf-8')); a=r['audits']['errors-in-console']; print(p, a.get('details',{}))
> '@ | python -`
>
> </details>
>
> The desktop audit caught a real issue the mobile audit could not see: the optional 3D portrait shader declared its color attribute twice, so WebGL logged an error. I’m correcting that shader configuration and will rerun desktop Lighthouse to confirm it’s clean.
>
> <details><summary>Edited a file, ran 2 commands, searched the web</summary>
>
> - Wrote `./hero-scene.js` (+0 -1)
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root=Path.cwd(); server=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)))
> thread=threading.Thread(target=server.serve_forever,daemon=True); thread.start()
> command=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--preset=desktop','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(command,cwd=root,text=True,capture_output=True,timeout=150); print('LIGHTHOUSE_EXIT='+str(r.returncode)); print(r.stderr[-1200:])
> finally: server.shutdown(); server.server_close()
> '@ | python -`
>
> - Ran `@'
> import json
> p=r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-desktop.json'
> r=json.load(open(p,encoding='utf-8'))
> print({k:round(v['score']*100) for k,v in r['categories'].items()})
> print('console errors:',r['audits']['errors-in-console']['details'].get('items',[]))
> for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift']:
>  print(k,r['audits'][k].get('displayValue'))
> '@ | python -
> Select-String -Path hero-scene.js,styles.css,index.html -Pattern 'motionCapable|vertexColors|--dim:#969b8d|srcset|favicon.svg' | Select-Object -First 15 | ForEach-Object { $_.Path + ':' + $_.LineNumber + ': ' + $_.Line.Trim().Substring(0,[Math]::Min(170,$_.Line.Trim().Length)) }`
>
> Searched the web for `https://github.com/morluto/rea`
>
> </details>
</details>

I tightened the portfolio and ran Lighthouse on both mobile and desktop.

- **Mobile:** Performance 91, Accessibility 100, Best Practices 100, SEO 100. LCP was 2.9 s and CLS 0.001.
- **Desktop:** Performance 97, Accessibility 100, Best Practices 100, SEO 100. LCP was 0.9 s and CLS 0.008.
- The desktop audit also caught a duplicate color attribute in the 3D portrait shader. I fixed it and reran the audit; it now reports no browser console errors.

The updates gate the 3D portrait on desktop pointer and motion settings, use responsive WebP images, improve muted-text contrast, add a local favicon, and defer scripts. They’re in [hero-scene.js](/E:/portfolio/hero-scene.js), [styles.css](/E:/portfolio/styles.css), [index.html](/E:/portfolio/index.html), [work.html](/E:/portfolio/work.html), and [about.html](/E:/portfolio/about.html).

**REA limitation:** I reviewed the [REA repository](https://github.com/morluto/rea) and its [browser observation guide](https://github.com/morluto/rea/blob/main/docs/guides/web/browser-observation.md), but couldn’t run REA itself here: its browser inspection requires a configured CDP connection, and REA isn’t available as a configured tool in this environment. I used the public reference site directly for inspection. So this improves the portfolio, but I can’t claim a pixel-perfect clone or that REA performed the inspection.

Lighthouse ran against a local static server, so the scores are useful diagnostics rather than production measurements. In particular, that server doesn’t provide text compression or production caching; Lighthouse scores can differ on the deployed site. Lighthouse’s [official overview](https://developer.chrome.com/docs/lighthouse/overview) describes its performance, accessibility, SEO, and best-practices audits.

> what the hell is this ? means oour site looks cheap copy of other good site. causse in our site there is no effect of hover properly , not content placment properly , inforamation architecture is not proerply deisgnied . animations not properly implemented . see this refrence site is made during this yooutube video is could extarct relavant sources and information to improve our portfolio do it.[https://youtu.be/gq8TxEyE7mo](https://youtu.be/gq8TxEyE7mo)
> also want to deisgn this portfolio at that level so by reviewing or seeing client for free lancing and interviewer or recuriter for placement both are stuned and can see my actaull work , capability , skill . (for free lancer it portfolio is the only site from where client judge that is project should give or not ) so here mistakes and bugs or bad ui/ux will not tolerable . deisgn somethin like people want to copy us .  see these effect on face and theese dots simualtors . means that kind of if we have on site not exaclty copied but that kind of thing bring more user engagement and more user engament bring trust . and trust build connetion . so properly reserach and user relavtn skills and repo to implement task. also why still in each app otuter border is like yellowish colored to each app border ? fix it if from our side issue.
>
> User context
>
> Images:
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-b6bbbc38-de93-4587-ac03-68095b3b1332.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-fb337d64-0f1b-4796-b906-37d3db2bf457.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-0a5c6c07-e142-439c-8509-05320c9c15b7.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-8e42b3ab-54b0-4971-b57f-d92c7c65bb29.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-8d4e15cf-bc10-4b50-8d4c-b303da4753fc.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-b7fd42de-dd6e-475c-8edd-dfa7a42533a3.png`

<details><summary>35 previous messages</summary>

> I can see the gap in your screenshots: the reference has a clear visual idea—the portrait particle treatment, oversized editorial name, and a deliberate content hierarchy—while our hero is still reading as a generic dark portfolio. I’m reviewing the video and current pages now, then I’ll rework the site’s visual system and mobile composition around your actual projects and audience.
>
> <details><summary>Ran 4 commands, searched the web</summary>
>
> - Ran `Get-ChildItem -Force | Select-Object Name,Length,Mode; rg -n "hero|site-header|project-card|contact-form|outline|border|box-shadow|reveal|pointer" index.html about.html work.html styles.css app.js hero-scene.js`
>
> Searched the web for `"gq8TxEyE7mo" portfolio website tutorial ...`
>
> Searched the web for `"I Built My Entire Portfolio With AI… And It Looks Insane" ...`
>
> - Ran `Get-Content index.html -TotalCount 95; Get-Content styles.css -Tail 170; Get-Content app.js -Tail 120`
>
> - Ran `Get-Content app.js -TotalCount 205; rg -n "@media|hero-line|hero-decoration|project-card::|site-header|#contact|scroll-progress" styles.css | Select-Object -Last 35`
>
> - Ran `Get-ChildItem assets -Recurse | Select-Object FullName,Length | Sort-Object FullName | Select-Object -First 70;`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran a command</summary>
>
> - Ran `Get-ChildItem -Force E:\Resume_PortFolio | Select-Object Name,Mode,Length | Select-Object -First 60`
>
> </details>
>
> The linked video is titled “I Built My Entire Portfolio With AI… And It Looks Insane.” Its description explicitly stresses direction, content structure, revision, and making the result feel custom—not blindly copying the page. I’m applying that process here: keeping your lime/charcoal identity, but giving it an editorial portrait-led opening, a stronger project-first story, and a real pointer-reactive halftone portrait that works without WebGL.
>
> <details><summary>Edited a file, ran 4 commands</summary>
>
> - Ran ``@'
> from pathlib import Path
> p=Path('index.html'); s=p.read_text(encoding='utf-8')
> s=s.replace('family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap','family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap')
> start=s.index('      <section class="hero section-shell">')
> end=s.index('      </section>', start)+len('      </section>')
> hero='''      <section class="hero section-shell" aria-labelledby="hero-title">
>         <div class="hero-topline">
>           <span class="eyebrow"><i class="status-dot"></i> SOFTWARE ENGINEER · PRODUCT BUILDER</span>
>           <span class="eyebrow">AHMEDABAD, INDIA <span class="hero-coordinate">· 23°01′N 72°34′E</span></span>
>         </div>
>         <div class="hero-stage">
>           <div class="hero-side-note hero-side-note-left"><span>01 / INTRODUCTION</span><i>Curious by default.<br />Builder by choice.</i></div>
>           <div class="hero-side-note hero-side-note-right"><span>INTERACTIVE STUDY</span><i>Move your pointer<br />through the signal ↗</i></div>
>           <div class="hero-decoration" aria-hidden="true">
>             <div class="hero-scene">
>               <img class="hero-fallback" src="assets/vatsal-portrait-420.webp" srcset="assets/vatsal-portrait-420.webp 420w, assets/vatsal-portrait-840.webp 840w, assets/vatsal-portrait.webp 1254w" sizes="(max-width: 700px) 300px, 500px" alt="" fetchpriority="high" decoding="async" />
>               <canvas class="hero-canvas"></canvas>
>             </div>
>             <span class="portrait-index">V / 01</span>
>           </div>
>           <div class="hero-copy">
>             <p class="hero-kicker">A HUMAN PERSPECTIVE ON SOFTWARE</p>
>             <h1 id="hero-title" class="hero-title"><span>Vatsal</span> <em>Vadgama</em><i>.</i></h1>
>             <div class="hero-bottom">
>               <p class="hero-description">I turn complex problems into useful products—from the interface people trust to the systems that keep everything running.</p>
>               <div class="hero-actions">
>                 <a class="button button-primary" href="#work">Explore my work <span>↓</span></a>
>                 <a class="text-link" href="assets/Vatsal-Vadgama-Resume.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
>               </div>
>             </div>
>           </div>
>         </div>
>         <div class="hero-index"><span>CS UNDERGRADUATE · NIRMA UNIVERSITY</span><span>PRODUCTS · SYSTEMS · MACHINE LEARNING</span><a href="#work">SCROLL TO EXPLORE ↓</a></div>
>       </section>'''
> s=s[:start]+hero+s[end:]
> # Put selected work before biography for recruiter/client scan path.
> a=s.index('      <section id="about"'); b=s.index('      </section>',a)+len('      </section>'); about=s[a:b]
> s=s[:a]+s[b:]
> work_end=s.index('      </section>', s.index('<section id="work"'))+len('      </section>')
> s=s[:work_end]+'\n\n'+about+s[work_end:]
> p.write_text(s,encoding='utf-8')
> '@ | python -
> @'
> const canvas = document.querySelector(".hero-canvas");
> const portrait = document.querySelector(".hero-fallback");
> const scene = document.querySelector(".hero-scene");
> if (canvas && portrait && scene) {
>   const context = canvas.getContext("2d", { alpha: true });
>   const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
>   const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
>   let particles = [];
>   let frame = 0;
>   let width = 0;
>   let height = 0;
>   let pixelRatio = 1;
>   const pointer = { x: -1000, y: -1000, active: false };
>
>   function buildParticles() {
>     if (!portrait.complete || !portrait.naturalWidth) return;
>     const sample = document.createElement("canvas");
>     const sampleWidth = 156;
>     const sampleHeight = Math.round(sampleWidth * portrait.naturalHeight / portrait.naturalWidth);
>     sample.width = sampleWidth;
>     sample.height = sampleHeight;
>     const sampleContext = sample.getContext("2d", { willReadFrequently: true });
>     sampleContext.clearRect(0, 0, sampleWidth, sampleHeight);
>     sampleContext.drawImage(portrait, 0, 0, sampleWidth, sampleHeight);
>     const pixels = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
>     particles = [];
>     const gap = 1.35;
>     for (let y = 0; y < sampleHeight; y += 1) {
>       for (let x = 0; x < sampleWidth; x += 1) {
>         const i = (y * sampleWidth + x) * 4;
>         const alpha = pixels[i + 3] / 255;
>         if (alpha < 0.15) continue;
>         const luminance = (pixels[i] * .2126 + pixels[i + 1] * .7152 + pixels[i + 2] * .0722) / 255;
>         const edge = x / sampleWidth;
>         const warm = edge > .72 && luminance < .46;
>         particles.push({
>           x: x / sampleWidth,
>           y: y / sampleHeight,
>           radius: .34 + luminance * .78,
>           alpha: Math.min(.96, alpha * (.35 + luminance * .66)),
>           color: warm ? "#c8f169" : (luminance > .68 ? "#f4f0e6" : "#a4a99a"),
>           phase: (x * 17 + y * 31) % 100 / 100,
>           gap
>         });
>       }
>     }
>     portrait.classList.add("is-covered");
>     draw(0);
>   }
>
>   function resize() {
>     const bounds = scene.getBoundingClientRect();
>     width = bounds.width;
>     height = bounds.height;
>     pixelRatio = Math.min(window.devicePixelRatio || 1, finePointer.matches ? 1.5 : 1.15);
>     canvas.width = Math.round(width * pixelRatio);
>     canvas.height = Math.round(height * pixelRatio);
>     canvas.style.width = `${width}px`;
>     canvas.style.height = `${height}px`;
>     context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
>     draw(0);
>   }
>
>   function draw(time) {
>     if (!context || !width || !height || !particles.length) return;
>     context.clearRect(0, 0, width, height);
>     const scale = Math.min(width * .88, height * .91);
>     const imageWidth = scale;
>     const imageHeight = scale * portrait.naturalHeight / portrait.naturalWidth;
>     const offsetX = (width - imageWidth) / 2;
>     const offsetY = Math.max(0, (height - imageHeight) / 2 - height * .005);
>     for (const point of particles) {
>       let x = offsetX + point.x * imageWidth;
>       let y = offsetY + point.y * imageHeight;
>       if (!reducedMotion.matches && !document.hidden) {
>         y += Math.sin(time * .0005 + point.phase * 6.28) * .62;
>         if (pointer.active && finePointer.matches) {
>           const dx = x - pointer.x;
>           const dy = y - pointer.y;
>           const distance = Math.hypot(dx, dy);
>           const radius = 104;
>           if (distance < radius && distance > .01) {
>             const push = (1 - distance / radius) * 12;
>             x += dx / distance * push;
>             y += dy / distance * push;
>           }
>         }
>       }
>       context.globalAlpha = point.alpha;
>       context.fillStyle = point.color;
>       context.beginPath();
>       context.arc(x, y, point.radius, 0, Math.PI * 2);
>       context.fill();
>     }
>     context.globalAlpha = 1;
>     if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw);
>   }
>
>   function start() {
>     cancelAnimationFrame(frame);
>     if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw);
>     else draw(0);
>   }
>   portrait.addEventListener("load", buildParticles, { once: true });
>   if (portrait.complete) buildParticles();
>   new ResizeObserver(resize).observe(scene);
>   window.addEventListener("pointermove", (event) => {
>     const bounds = scene.getBoundingClientRect();
>     pointer.x = event.clientX - bounds.left;
>     pointer.y = event.clientY - bounds.top;
>     pointer.active = pointer.x >= 0 && pointer.x <= bounds.width && pointer.y >= 0 && pointer.y <= bounds.height;
>   }, { passive: true });
>   window.addEventListener("pointerout", (event) => { if (!event.relatedTarget) pointer.active = false; }, { passive: true });
>   document.addEventListener("visibilitychange", start);
>   reducedMotion.addEventListener?.("change", start);
> }
> '@ | Set-Content -Encoding utf8 hero-scene.js``
> - Ran `rg -n 'chapter-nav|hero-decoration|hero-canvas|hero-scene|<section id="(work|about)' index.html styles.css app.js`
> - Ran `@'
> /* Portfolio art direction: editorial hierarchy, a neutral frame, responsive portrait stage. */
> :root{--display:"Instrument Serif",Georgia,serif;--line:#31342f;--dim:#a0a399}
> body{background:#0b0c0b}
> .grain{opacity:.025}
> .site-header{border-color:rgba(240,239,230,.16);border-radius:999px;background:rgba(12,13,12,.84);box-shadow:0 12px 38px rgba(0,0,0,.26)}
> .site-header:hover{border-color:rgba(240,239,230,.3)}
> .site-header:focus-within{border-color:rgba(200,241,105,.52)}
> *:focus-visible{outline:2px solid var(--lime);outline-offset:4px}
> .hero{min-height:calc(100svh - 92px);height:auto;padding-top:26px;padding-bottom:0;overflow:clip}
> .hero-topline{position:relative;z-index:4;max-width:none;padding-top:4px}
> .hero-topline .eyebrow{font-size:9px;letter-spacing:.13em;color:#c1c3bb}
> .hero-stage{position:relative;min-height:730px;isolation:isolate;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
> .hero-stage:before{content:"";position:absolute;z-index:-2;top:32px;left:50%;width:min(820px,85vw);height:min(580px,68vw);transform:translateX(-50%);background:radial-gradient(ellipse at 50% 58%,rgba(200,241,105,.07),transparent 68%);pointer-events:none}
> .hero-stage:after{content:"";position:absolute;z-index:-1;inset:0 5% 6%;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:76px 76px;mask-image:radial-gradient(ellipse at 50% 44%,#000 4%,transparent 78%);pointer-events:none}
> .hero-decoration{position:absolute;z-index:0;top:2px;left:50%;right:auto;width:min(560px,48vw);height:535px;transform:translateX(-50%);opacity:1;pointer-events:none}
> .hero-scene{position:absolute;inset:0;display:grid;place-items:center;overflow:visible;perspective:none}
> .hero-fallback,.hero-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:contain;transition:opacity .7s ease}
> .hero-fallback{z-index:1;opacity:.34;filter:grayscale(1) contrast(1.12);mix-blend-mode:screen}
> .hero-fallback.is-covered{opacity:0}
> .hero-canvas{z-index:2}
> .portrait-index{position:absolute;right:3%;bottom:12%;z-index:3;color:#d5f19a;font:9px var(--mono);letter-spacing:.14em}
> .hero-side-note{position:absolute;z-index:3;top:39%;display:flex;flex-direction:column;gap:15px;color:#aaa99e;font:9px var(--mono);letter-spacing:.1em;line-height:1.7}
> .hero-side-note span{color:var(--lime)}
> .hero-side-note i{font-style:normal;color:#a5a69c;letter-spacing:.03em}
> .hero-side-note-left{left:0}.hero-side-note-right{right:0;text-align:right}
> .hero-copy{position:relative;z-index:4;width:100%;max-width:1320px;margin:0 auto;padding-top:352px;display:flex;flex-direction:column;align-items:center;text-align:center}
> .hero-kicker{margin:0 0 4px;color:#e0dfd6;font:9px var(--mono);letter-spacing:.24em;text-transform:uppercase}
> .hero-title{display:flex;justify-content:center;align-items:baseline;gap:.18em;width:100%;max-width:100%;margin:0;color:#f1eee4;font:400 clamp(92px,12.4vw,188px)/.78 var(--display);letter-spacing:-.052em;white-space:nowrap;text-align:center;text-wrap:nowrap}
> .hero-title span{font-style:normal}.hero-title em{color:#f1eee4;font-weight:400;font-style:italic}.hero-title i{font-style:normal;color:var(--lime);font-size:.58em;align-self:flex-end;margin-left:-.12em;margin-bottom:.06em}
> .hero-bottom{display:flex;flex-direction:column;align-items:center;gap:21px;margin:26px auto 0}
> .hero-description{max-width:640px;color:#c1c1b8;text-align:center;font-size:15px;line-height:1.8}
> .hero-actions{display:flex;justify-content:center;align-items:center;gap:14px}
> .hero-actions .button-primary{min-width:200px;border-radius:999px;padding:14px 20px;background:#edece4;color:#141511;transition:transform .3s,background .3s,box-shadow .3s}
> .hero-actions .button-primary:hover{transform:translateY(-3px);background:var(--lime);box-shadow:0 12px 34px rgba(200,241,105,.15)}
> .hero-actions .button-primary span{transition:transform .3s}.hero-actions .button-primary:hover span{transform:translateY(3px)}
> .hero-actions .text-link{padding:13px 18px;border:1px solid rgba(240,239,230,.18);border-radius:999px;color:#deded4;transition:background .3s,border-color .3s,color .3s}
> .hero-actions .text-link:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.35);color:var(--lime)}
> .hero-index{position:relative;z-index:4;display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;margin-top:auto;padding:18px 0 19px;border-top:1px solid rgba(240,239,230,.15);font-size:8px;letter-spacing:.12em}
> .hero-index span:first-child{color:#d8d8ce}.hero-index span:nth-child(2){color:#93968c}.hero-index a{justify-self:end;color:#d8d8ce;transition:color .25s}.hero-index a:hover{color:var(--lime)}
> .work-section{background:#10110f}
> .section-heading{border-color:rgba(240,239,230,.16)}
> .section-heading:after{background:rgba(200,241,105,.72);box-shadow:none}
> .project-list{gap:22px}
> .project-card{border:1px solid rgba(240,239,230,.12);border-radius:5px;transition:transform .55s cubic-bezier(.2,.75,.2,1),border-color .35s,box-shadow .4s;box-shadow:0 22px 70px rgba(0,0,0,.16)}
> .project-card:hover{transform:translateY(-5px);border-color:rgba(200,241,105,.42);box-shadow:0 30px 90px rgba(0,0,0,.3),0 0 0 1px rgba(200,241,105,.06)}
> .project-visual{min-width:0;background:#090a09;overflow:hidden}
> .project-visual .project-image{width:100%;height:100%;padding:clamp(12px,2vw,24px);object-fit:contain;background:radial-gradient(ellipse at 50% 48%,#23251f,#0d0e0d 76%);transition:transform .8s cubic-bezier(.2,.75,.2,1),filter .5s}
> .project-card:hover .project-visual .project-image{transform:scale(1.045);filter:saturate(1.08) brightness(1.04)}
> .project-visual:after{z-index:1;inset:65% 0 0;background:linear-gradient(transparent,rgba(8,9,8,.38))}
> .project-image-label{z-index:2;color:#f0efe7}
> .project-info{position:relative;z-index:2;background:linear-gradient(135deg,#141512,#10110f);padding:clamp(28px,4vw,60px)}
> .project-info h3{transition:color .25s}.project-card:hover .project-info h3{color:var(--lime)}
> .project-detail{position:relative;display:inline-flex;align-items:center;gap:20px;padding:10px 0;border:0;border-bottom:1px solid rgba(240,239,230,.34);background:transparent;color:#e4e4db;cursor:pointer;transition:color .25s,border-color .25s,gap .25s}
> .project-detail:hover{gap:27px;color:var(--lime);border-color:var(--lime)}
> .project-detail span{color:var(--lime);transition:transform .25s}.project-detail:hover span{transform:translate(3px,-3px)}
> .mini-project{border:1px solid rgba(240,239,230,.12);border-radius:4px;background:#11120f;transition:transform .4s,border-color .35s,box-shadow .35s}
> .mini-project:hover{transform:translateY(-5px);border-color:rgba(200,241,105,.4);box-shadow:0 20px 55px rgba(0,0,0,.28)}
> .mini-project-image{width:100%;object-fit:contain;transition:transform .65s cubic-bezier(.2,.75,.2,1),filter .4s}
> .mini-project:hover .mini-project-image{transform:scale(1.035);filter:brightness(1.06)}
> .contact-form{border-color:rgba(240,239,230,.13);border-radius:5px;box-shadow:0 22px 70px rgba(0,0,0,.18)}
> .contact-form input,.contact-form textarea{border-radius:3px}.contact-form input:focus,.contact-form textarea:focus{border-color:var(--lime);box-shadow:0 0 0 3px rgba(200,241,105,.13)}
> @media(max-width:1000px){
>  .hero-stage{min-height:690px}.hero-decoration{width:min(540px,62vw);height:500px}.hero-copy{padding-top:338px}.hero-title{font-size:clamp(86px,13.5vw,146px)}
>  .hero-side-note{top:30%;font-size:8px}.hero-side-note-left{left:4px}.hero-side-note-right{right:4px}
> }
> @media(max-width:720px){
>  .site-header{width:calc(100% - 26px);height:58px;top:7px;padding:0 15px;border-radius:999px}
>  .primary-nav{border:1px solid rgba(240,239,230,.16);border-radius:16px;background:rgba(12,13,12,.96);box-shadow:0 20px 60px rgba(0,0,0,.42)}
>  main{padding-top:78px}.hero{min-height:0;padding-top:17px;overflow:clip}
>  .hero-topline{align-items:flex-start;gap:10px}.hero-topline .eyebrow{font-size:7px;line-height:1.5}.hero-coordinate{display:none}
>  .hero-stage{min-height:690px}
>  .hero-decoration{top:0;width:min(390px,100vw);height:390px;opacity:1}
>  .hero-side-note{top:31%;font-size:7px;gap:8px}.hero-side-note-left{left:0}.hero-side-note-right{right:0}.hero-side-note i{display:none}
>  .hero-copy{padding-top:287px}.hero-kicker{font-size:7px;letter-spacing:.17em;margin-bottom:8px}
>  .hero-title{display:flex;flex-direction:column;align-items:center;gap:0;white-space:normal;text-wrap:balance;font-size:clamp(78px,19vw,132px);line-height:.67;letter-spacing:-.045em}
>  .hero-title span,.hero-title em{display:block}.hero-title i{position:absolute;font-size:48px;margin:0;right:6%;bottom:43%}
>  .hero-bottom{gap:16px;margin-top:22px;padding-inline:8px}.hero-description{font-size:13px;line-height:1.7;max-width:380px}
>  .hero-actions{width:100%;gap:8px;flex-wrap:wrap}.hero-actions .button-primary{min-width:0;justify-content:center;gap:20px;padding:13px 17px}.hero-actions .text-link{padding:12px 15px}
>  .hero-index{grid-template-columns:1fr auto;gap:8px;padding:15px 0;font-size:7px}.hero-index span:nth-child(2){display:none}
>  .section-shell,.page-shell{width:calc(100% - 38px)}.section-pad{padding-block:76px}
>  .project-card,.project-card:nth-child(even){border-radius:4px}.project-visual{aspect-ratio:1.08;min-height:0}.project-visual .project-image{padding:12px}
>  .project-info{padding:24px 19px 28px}.project-topline{gap:12px;font-size:7px}.project-topline span:last-child{text-align:right}.project-image-label{font-size:7px}
>  .contact-form{padding:18px 15px}.site-header{border-color:rgba(240,239,230,.16)}
> }
> @media(max-width:380px){.hero-title{font-size:clamp(68px,18vw,78px)}.hero-side-note{display:none}.hero-index{font-size:6px}.hero-actions{gap:7px}.hero-actions .button-primary,.hero-actions .text-link{font-size:9px}}
> @media(prefers-reduced-motion:reduce){.hero-fallback,.hero-actions .button-primary,.hero-actions .text-link,.project-card,.project-visual .project-image,.mini-project,.mini-project-image{transition:none!important}.hero-decoration{transform:translateX(-50%)!important}}
> '@ | Add-Content styles.css`
> - Wrote `./app.js` (+5 -7)
> - Ran `node --check app.js; node --check hero-scene.js; @'
> from pathlib import Path
> s=Path('index.html').read_text()
> print('section order:', [line.strip().split('id="')[1].split('"')[0] for line in s.splitlines() if '<section id=' in line])
> print('hero is central portrait:', 'hero-title' in s and 'hero-canvas' in s)
> print('old webgl references:', 'three.module' in Path('hero-scene.js').read_text())
> '@ | python -`
>
> </details>
>
> I’ve moved “Selected Work” ahead of the biography so a recruiter or client sees proof before the longer context. The opening now uses an editorial serif name, a responsive central portrait, clear résumé/work actions, and an interactive particle field; I’ve removed the previous WebGL dependency and changed the site’s olive-tinted header outline to a neutral border. I’m checking desktop and narrow-phone renders next.
>
> <details><summary>Ran a command</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root=Path.cwd(); server=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root))); threading.Thread(target=server.serve_forever,daemon=True).start()
> chrome=r'C:\Program Files\Google\Chrome\Application\chrome.exe'
> base=['--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=3500','--run-all-compositor-stages-before-draw']
> for label,size in [('desktop','1440,1000'),('mobile','390,844')]:
>  out=Path(r'C:\Users\VATSAL\AppData\Local\Temp')/f'portfolio-preview-{label}.png'
>  cmd=[chrome,*base,f'--window-size={size}',f'--screenshot={out}',f'http://127.0.0.1:8767/']
>  r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=45)
>  print(label,'exit',r.returncode,'exists',out.exists(),'bytes',out.stat().st_size if out.exists() else 0)
>  print(r.stderr[-500:])
> server.shutdown(); server.server_close()
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> Viewed an image
>
> <details><summary>Edited a file, ran 2 commands</summary>
>
> - Ran `Select-String -Path hero-scene.js -Pattern 'radius|alpha:|color:' | ForEach-Object Line;`
> - Wrote `./hero-scene.js` (+14 -3)
> - Ran `@'
> .hero-decoration{top:-34px}
> .hero-description{width:min(100%,640px)}
> .hero-side-note-right{max-width:150px;right:12px}
> .hero-side-note-left{left:12px}
> @media(max-width:1000px){.hero-decoration{top:-22px}.hero-side-note-right{right:7px;max-width:125px}}
> @media(max-width:720px){.hero-decoration{top:0}.hero-side-note-left{left:0}.hero-side-note-right{right:0;max-width:90px}.hero-description{width:100%;max-width:380px}.hero-copy{min-width:0}.hero-bottom{width:100%;min-width:0}}
> '@ | Add-Content styles.css`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `Test-Path E:\Resume_PortFolio\node_modules\playwright; Test-Path E:\Resume_PortFolio\node_modules\playwright-core; (Get-Item C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview-mobile.png).LastWriteTime; (Get-Item C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview-mobile.png).Length; Get-Content styles.css -Tail 12`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess, threading
> root=Path.cwd();server=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=server.serve_forever,daemon=True).start()
> chrome=r'C:\Program Files\Google\Chrome\Application\chrome.exe';base=['--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=2500','--run-all-compositor-stages-before-draw']
> for label,size in [('desktop','1440,1000'),('mobile','390,844')]:
>  out=Path(r'C:\Users\VATSAL\AppData\Local\Temp')/f'portfolio-preview-{label}.png';r=subprocess.run([chrome,*base,f'--window-size={size}',f'--screenshot={out}',f'http://127.0.0.1:8767/'],capture_output=True,timeout=40);print(label,r.returncode,out.stat().st_size if out.exists() else 'missing')
> server.shutdown();server.server_close()
> '@ | python -`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();srv=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=srv.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-mobile-review.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=1500','--window-size=390,844',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=55);print('exit',r.returncode,'size',out.stat().st_size if out.exists() else 0);print(r.stderr[-400:]);srv.shutdown();srv.server_close()
> '@ | python -`
> - Ran `Get-Item C:\Users\VATSAL\AppData\Local\Temp\portfolio-mobile-review.png -ErrorAction SilentlyContinue | Select-Object FullName,Length,LastWriteTime`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `@'
> .hero h1.hero-title{font:400 clamp(88px,13vw,194px)/.78 var(--display);letter-spacing:-.052em;max-width:100%;}
> @media(max-width:1000px){.hero h1.hero-title{font-size:clamp(82px,13.5vw,146px)}}
> @media(max-width:720px){.hero h1.hero-title{font-size:clamp(76px,18.4vw,126px);line-height:.68}.hero-description{width:calc(100vw - 44px)!important;max-width:360px!important;font-size:12.5px;overflow-wrap:break-word}}
> @media(max-width:380px){.hero h1.hero-title{font-size:clamp(66px,18vw,74px)}}
> '@ | Add-Content styles.css`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-mobile-final.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--disable-extensions','--disable-background-networking','--host-resolver-rules=MAP fonts.googleapis.com 127.0.0.1,MAP fonts.gstatic.com 127.0.0.1,MAP cdn.jsdelivr.net 127.0.0.1,MAP unpkg.com 127.0.0.1','--hide-scrollbars','--virtual-time-budget=800','--window-size=390,844',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=45);print(r.returncode,out.exists(),out.stat().st_size if out.exists() else 0);s.shutdown();s.server_close()
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran ``@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from pathlib import Path
> import threading,subprocess,re
> root=Path.cwd()
> class H(SimpleHTTPRequestHandler):
>  def do_GET(self):
>   if self.path=='/' or self.path.startswith('/?'):
>    data=(root/'index.html').read_text(encoding='utf-8')
>    js='''<script>window.addEventListener("load",()=>{setTimeout(()=>{const sels=["html","body","main",".hero",".hero-stage",".hero-copy",".hero-title",".hero-description",".hero-decoration"];const r=sels.map(s=>{let e=document.querySelector(s),b=e.getBoundingClientRect(),c=getComputedStyle(e);return `${s}:${Math.round(b.x)},${Math.round(b.width)},${Math.round(b.right)};scroll=${e.scrollWidth};font=${c.fontSize}`}).join("\\n");let x=[...document.querySelectorAll("body *")].filter(e=>{let b=e.getBoundingClientRect();return b.width&& (b.right>innerWidth+2||b.left< -2)}).slice(0,20).map(e=>`${e.tagName}.${e.className}:${Math.round(e.getBoundingClientRect().left)}..${Math.round(e.getBoundingClientRect().right)}`).join("\\n");document.body.insertAdjacentHTML("afterbegin",`<pre id="metrics">inner=${innerWidth} client=${document.documentElement.clientWidth} bodyScroll=${document.body.scrollWidth}\\n${r}\\nOVERFLOW\\n${x}</pre>`);},1000)})</script></body>'''
>    data=data.replace('</body>',js)
>    raw=data.encode();self.send_response(200);self.send_header('Content-Type','text/html; charset=utf-8');self.send_header('Content-Length',str(len(raw)));self.end_headers();self.wfile.write(raw);return
>   return super().do_GET()
> server=ThreadingHTTPServer(('127.0.0.1',8767),H);threading.Thread(target=server.serve_forever,daemon=True).start()
> r=subprocess.run([r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--disable-background-networking','--window-size=390,844','--virtual-time-budget=3000','--dump-dom','http://127.0.0.1:8767/'],capture_output=True,text=True,timeout=45)
> m=re.search(r'<pre id="metrics">(.*?)</pre>',r.stdout,re.S);print(m.group(1).replace('\\n','\n') if m else r.stderr[-1000:]);server.shutdown();server.server_close()
> '@ | python -``
> - Ran `@'
> @media(max-width:720px){
>  .hero h1.hero-title{font-size:clamp(52px,14.5vw,100px);line-height:.72;max-width:calc(100vw - 36px);}
>  .hero-description{width:calc(100vw - 56px)!important;max-width:346px!important;padding-inline:2px;font-size:12px;overflow-wrap:anywhere;}
> }
> @media(max-width:380px){.hero h1.hero-title{font-size:clamp(50px,15vw,60px)}}
> '@ | Add-Content styles.css
> @'
> from pathlib import Path
> for name in ['work.html','about.html']:
>  p=Path(name); s=p.read_text(encoding='utf-8').replace('family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap','family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');p.write_text(s,encoding='utf-8')
> '@ | python -`
>
> </details>
>
> The first mobile render exposed two actual layout bugs: the serif surname was too wide for a phone, and the supporting copy was riding the right edge. I’ve reduced the mobile type scale and constrained the copy to the viewport; I’m doing one more narrow-screen check before rerunning Lighthouse.
>
> <details><summary>Ran a command</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();srv=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=srv.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-mobile-final2.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--disable-extensions','--disable-background-networking','--host-resolver-rules=MAP fonts.googleapis.com 127.0.0.1,MAP fonts.gstatic.com 127.0.0.1,MAP cdn.jsdelivr.net 127.0.0.1,MAP unpkg.com 127.0.0.1','--hide-scrollbars','--virtual-time-budget=700','--window-size=390,844',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=45);print('render',r.returncode,out.stat().st_size if out.exists() else 0);srv.shutdown();srv.server_close()
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran ``@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from pathlib import Path
> import threading,subprocess
> root=Path.cwd()
> class H(SimpleHTTPRequestHandler):
>  def do_GET(self):
>   if self.path=='/':
>    d=(root/'index.html').read_text(encoding='utf-8')
>    add='''<script>setTimeout(()=>{let q=s=>{let e=document.querySelector(s),r=e.getBoundingClientRect();return `${s} x${r.x.toFixed(0)} w${r.width.toFixed(0)} r${r.right.toFixed(0)} sc${e.scrollWidth}`};let d=document.createElement('div');d.style='position:fixed;z-index:99999;top:70px;right:0;background:#f00;color:#fff;font:12px monospace;padding:8px;max-width:230px';d.textContent=`vw ${innerWidth} client ${document.documentElement.clientWidth} body ${document.body.getBoundingClientRect().width}\\n${q(".hero")}\\n${q(".hero-stage")}\\n${q(".hero-copy")}\\n${q(".hero-title")}\\n${q(".hero-description")}`;document.body.append(d)},700)</script></body>'''
>    d=d.replace('</body>',add);b=d.encode();self.send_response(200);self.send_header('Content-Type','text/html;charset=utf-8');self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b);return
>   return super().do_GET()
> srv=ThreadingHTTPServer(('127.0.0.1',8767),H);threading.Thread(target=srv.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-layout-debug.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--disable-extensions','--disable-background-networking','--hide-scrollbars','--virtual-time-budget=1200','--window-size=390,844',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,capture_output=True,timeout=40);print('done',r.returncode,out.stat().st_size if out.exists() else 0);srv.shutdown();srv.server_close()
> '@ | python -``
> - Ran `@'
> from PIL import Image
> for f in [r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-mobile-final2.png',r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-layout-debug.png']:
>  try: print(f,Image.open(f).size)
>  except Exception as e: print(f,type(e).__name__)
> '@ | python -`
> - Ran `@'
> @media(max-width:720px){
>  .hero-stage{width:100vw;margin-left:calc(50% - 50vw)}
>  .hero-copy{width:calc(100vw - 38px);max-width:none;margin-inline:auto}
>  .hero-side-note-left{left:19px}.hero-side-note-right{right:19px}
>  .hero-description{width:calc(100vw - 56px)!important;max-width:346px!important;margin-inline:auto;padding-inline:2px;overflow-wrap:anywhere}
> }
> '@ | Add-Content styles.css`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-mobile-final3.png');cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--disable-extensions','--disable-background-networking','--host-resolver-rules=MAP fonts.googleapis.com 127.0.0.1,MAP fonts.gstatic.com 127.0.0.1,MAP cdn.jsdelivr.net 127.0.0.1,MAP unpkg.com 127.0.0.1','--hide-scrollbars','--virtual-time-budget=600','--window-size=390,844',f'--screenshot={out}','http://127.0.0.1:8767/'];r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=40);print(r.returncode,out.exists(),out.stat().st_size if out.exists() else 0);s.shutdown();s.server_close()
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Edited a file, ran 3 commands</summary>
>
> - Ran `Get-Item C:\Users\VATSAL\AppData\Local\Temp\portfolio-debug-metrics.png -ErrorAction SilentlyContinue | Select-Object Length,LastWriteTime; Test-Path layout-debug.html`
> - Ran ``@'
> from pathlib import Path
> import subprocess
> root=Path.cwd(); page=root/'layout-debug.html'; data=(root/'index.html').read_text(encoding='utf-8')
> snippet='''<script>setTimeout(()=>{let sels=["html","body","main",".hero",".hero-stage",".hero-copy",".hero-title",".hero-description",".hero-decoration"];let info=`vw ${innerWidth} client ${document.documentElement.clientWidth} body ${document.body.getBoundingClientRect().width}`+sels.map(s=>{let e=document.querySelector(s),r=e.getBoundingClientRect();return `\\n${s} x${r.x.toFixed(0)} w${r.width.toFixed(0)} right${r.right.toFixed(0)}`}).join("");let d=document.createElement("div");d.style="position:fixed;z-index:999999;top:72px;right:0;background:red;color:white;font:12px monospace;white-space:pre;padding:6px";d.textContent=info;document.body.append(d)},500)</script></body>'''
> data=data.replace('</body>',snippet);page.write_text(data,encoding='utf-8')
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-debug-metrics.png')
> try:
>  cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--disable-extensions','--hide-scrollbars','--virtual-time-budget=800','--window-size=390,844','--allow-file-access-from-files',f'--screenshot={out}',page.as_uri()]
>  r=subprocess.run(cmd,capture_output=True,timeout=35);print(r.returncode,out.exists(),out.stat().st_size if out.exists() else 0)
> finally:page.unlink(missing_ok=True)
> '@ | python -``
> - Ran `@'
> @media(max-width:720px){
>  .hero h1.hero-title{font-size:clamp(44px,12.5vw,90px);line-height:.74;}
>  .hero-description{width:calc(100vw - 140px)!important;max-width:320px!important;font-size:12px;}
> }
> @media(max-width:380px){.hero h1.hero-title{font-size:clamp(42px,12.5vw,52px)}.hero-description{width:calc(100vw - 110px)!important}}
> '@ | Add-Content styles.css
> node --check app.js; node --check hero-scene.js`
> - Wrote `./hero-scene.js` (+3 -3)
>
> </details>
>
> The headline and portrait have a much stronger, original composition now, and I’ve also stopped animating the particle field on touch devices so phones keep the same visual without paying the desktop animation cost. I’m running a fresh Lighthouse mobile audit on this revision and checking that the entry pages still load cleanly.
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();srv=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=srv.serve_forever,daemon=True).start()
> cmd=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=mobile','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-editorial-mobile.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=150);print('LIGHTHOUSE_EXIT='+str(r.returncode));print(r.stderr[-1000:])
> finally:srv.shutdown();srv.server_close()
> '@ | python -`
> - Ran `@'
> import json
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-editorial-mobile.json',encoding='utf-8'))
> print({k:round(v['score']*100) for k,v in r['categories'].items()})
> for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift']:
>  print(k,r['audits'][k].get('displayValue'))
> print('console',r['audits']['errors-in-console']['details'].get('items',[]))
> '@ | python -
> node --check app.js; node --check hero-scene.js`
> - Ran `@'
> import json
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-editorial-mobile.json',encoding='utf-8'))
> for k in ['final-screenshot','full-page-screenshot','screenshot-thumbnails']:
>  a=r['audits'].get(k,{})
>  print(k,a.keys(), a.get('details',{}).keys())
> '@ | python -`
> - Ran `@'
> import json,base64
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-editorial-mobile.json',encoding='utf-8'))
> data=r['audits']['final-screenshot']['details']['data']
> if data.startswith('data:image'): data=data.split(',',1)[1]
> p=r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-lighthouse-mobile.png';open(p,'wb').write(base64.b64decode(data));print(p)
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 6 commands</summary>
>
> - Ran `@'
> from pathlib import Path
> css=Path('styles.css');s=css.read_text(encoding='utf-8');marker='/* Portfolio art direction: editorial hierarchy, a neutral frame, responsive portrait stage. */'
> if marker not in s: raise SystemExit('portfolio style marker not found')
> base,art=s.split(marker,1)
> Path('art-direction.css').write_text(marker+art,encoding='utf-8')
> css.write_text(base.rstrip()+'\n',encoding='utf-8')
> for name in ['index.html','work.html','about.html']:
>  p=Path(name); t=p.read_text(encoding='utf-8')
>  if 'art-direction.css' not in t:
>   t=t.replace('<link rel="stylesheet" href="styles.css" />','<link rel="stylesheet" href="styles.css" />\n    <link rel="stylesheet" href="art-direction.css" />')
>  p.write_text(t,encoding='utf-8')
> '@ | python -
> Get-Item art-direction.css | Select-Object Name,Length
> Select-String -Path index.html,work.html,about.html -Pattern 'art-direction' | ForEach-Object { $_.Path + ':' + $_.LineNumber }`
> - Ran `Get-Content art-direction.css -Tail 48; Get-Content README.md;`
> - Ran `Get-Content art-direction.css -TotalCount 120`
> - Ran `@'
> /*
>  * Portfolio art direction
>  * Editorial portrait hero, quiet neutral borders, responsive project-first layout.
>  */
> :root {
>   --display: "Instrument Serif", Georgia, serif;
>   --line: #31342f;
>   --dim: #a0a399;
> }
>
> body { background: #0b0c0b; }
> .grain { opacity: .025; }
> *:focus-visible { outline: 2px solid var(--lime); outline-offset: 4px; }
>
> /* Capsule navigation keeps the hide-on-down / reveal-on-up behavior from app.js. */
> .site-header {
>   border: 1px solid rgba(240, 239, 230, .16);
>   border-radius: 999px;
>   background: rgba(12, 13, 12, .84);
>   box-shadow: 0 12px 38px rgba(0, 0, 0, .26);
> }
> .site-header:hover { border-color: rgba(240, 239, 230, .3); }
> .site-header:focus-within { border-color: rgba(200, 241, 105, .52); }
>
> /* Portrait-led introduction */
> .hero {
>   min-height: calc(100svh - 92px);
>   height: auto;
>   padding-top: 26px;
>   padding-bottom: 0;
>   overflow: clip;
> }
> .hero-topline {
>   position: relative;
>   z-index: 4;
>   max-width: none;
>   padding-top: 4px;
> }
> .hero-topline .eyebrow {
>   color: #c1c3bb;
>   font-size: 9px;
>   letter-spacing: .13em;
> }
> .hero-stage {
>   position: relative;
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   justify-content: flex-start;
>   min-height: 730px;
>   isolation: isolate;
> }
> .hero-stage::before {
>   position: absolute;
>   z-index: -2;
>   top: 32px;
>   left: 50%;
>   width: min(820px, 85vw);
>   height: min(580px, 68vw);
>   background: radial-gradient(ellipse at 50% 58%, rgba(200, 241, 105, .07), transparent 68%);
>   content: "";
>   pointer-events: none;
>   transform: translateX(-50%);
> }
> .hero-stage::after {
>   position: absolute;
>   z-index: -1;
>   inset: 0 5% 6%;
>   background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
>   background-size: 76px 76px;
>   content: "";
>   mask-image: radial-gradient(ellipse at 50% 44%, #000 4%, transparent 78%);
>   pointer-events: none;
> }
> .hero-decoration {
>   position: absolute;
>   z-index: 0;
>   top: -34px;
>   left: 50%;
>   width: min(560px, 48vw);
>   height: 535px;
>   opacity: 1;
>   pointer-events: none;
>   transform: translateX(-50%);
> }
> .hero-scene {
>   position: absolute;
>   inset: 0;
>   display: grid;
>   place-items: center;
>   overflow: visible;
> }
> .hero-fallback, .hero-canvas {
>   position: absolute;
>   inset: 0;
>   display: block;
>   width: 100%;
>   height: 100%;
>   object-fit: contain;
>   transition: opacity .7s ease;
> }
> .hero-fallback {
>   z-index: 1;
>   opacity: .34;
>   filter: grayscale(1) contrast(1.12);
>   mix-blend-mode: screen;
> }
> .hero-fallback.is-covered { opacity: 0; }
> .hero-canvas { z-index: 2; }
> .portrait-index {
>   position: absolute;
>   z-index: 3;
>   right: 3%;
>   bottom: 12%;
>   color: #d5f19a;
>   font: 9px var(--mono);
>   letter-spacing: .14em;
> }
> .hero-side-note {
>   position: absolute;
>   z-index: 3;
>   top: 39%;
>   display: flex;
>   flex-direction: column;
>   gap: 15px;
>   color: #aaa99e;
>   font: 9px/1.7 var(--mono);
>   letter-spacing: .1em;
> }
> .hero-side-note span { color: var(--lime); }
> .hero-side-note i { color: #a5a69c; font-style: normal; letter-spacing: .03em; }
> .hero-side-note-left { left: 12px; }
> .hero-side-note-right { right: 12px; max-width: 150px; text-align: right; }
> .hero-copy {
>   position: relative;
>   z-index: 4;
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   width: 100%;
>   max-width: 1320px;
>   margin: 0 auto;
>   padding-top: 352px;
>   text-align: center;
> }
> .hero-kicker {
>   margin: 0 0 4px;
>   color: #e0dfd6;
>   font: 9px var(--mono);
>   letter-spacing: .24em;
>   text-transform: uppercase;
> }
> .hero h1.hero-title {
>   display: flex;
>   justify-content: center;
>   align-items: baseline;
>   gap: .18em;
>   width: 100%;
>   max-width: 100%;
>   margin: 0;
>   color: #f1eee4;
>   font: 400 clamp(88px, 13vw, 194px)/.78 var(--display);
>   letter-spacing: -.052em;
>   text-align: center;
>   white-space: nowrap;
> }
> .hero-title span { font-style: normal; }
> .hero-title em { color: #f1eee4; font-style: italic; font-weight: 400; }
> .hero-title i {
>   align-self: flex-end;
>   margin: 0 0 .06em -.12em;
>   color: var(--lime);
>   font-size: .58em;
>   font-style: normal;
> }
> .hero-bottom {
>   display: flex;
>   flex-direction: column;
>   align-items: center;
>   gap: 21px;
>   margin: 26px auto 0;
> }
> .hero-description {
>   width: min(100%, 640px);
>   max-width: 640px;
>   color: #c1c1b8;
>   font-size: 15px;
>   line-height: 1.8;
>   text-align: center;
> }
> .hero-actions { display: flex; justify-content: center; align-items: center; gap: 14px; }
> .hero-actions .button-primary {
>   min-width: 200px;
>   padding: 14px 20px;
>   border-radius: 999px;
>   background: #edece4;
>   color: #141511;
>   transition: transform .3s, background .3s, box-shadow .3s;
> }
> .hero-actions .button-primary:hover {
>   transform: translateY(-3px);
>   background: var(--lime);
>   box-shadow: 0 12px 34px rgba(200, 241, 105, .15);
> }
> .hero-actions .button-primary span { transition: transform .3s; }
> .hero-actions .button-primary:hover span { transform: translateY(3px); }
> .hero-actions .text-link {
>   padding: 13px 18px;
>   border: 1px solid rgba(240, 239, 230, .18);
>   border-radius: 999px;
>   color: #deded4;
>   transition: background .3s, border-color .3s, color .3s;
> }
> .hero-actions .text-link:hover {
>   border-color: rgba(255,255,255,.35);
>   background: rgba(255,255,255,.07);
>   color: var(--lime);
> }
> .hero-index {
>   position: relative;
>   z-index: 4;
>   display: grid;
>   grid-template-columns: 1fr auto 1fr;
>   align-items: center;
>   gap: 16px;
>   margin-top: auto;
>   padding: 18px 0 19px;
>   border-top: 1px solid rgba(240,239,230,.15);
>   font-size: 8px;
>   letter-spacing: .12em;
> }
> .hero-index span:first-child { color: #d8d8ce; }
> .hero-index span:nth-child(2) { color: #93968c; }
> .hero-index a { justify-self: end; color: #d8d8ce; transition: color .25s; }
> .hero-index a:hover { color: var(--lime); }
>
> /* Project work has room for the actual product screenshots and clearer hover states. */
> .work-section { background: #10110f; }
> .section-heading { border-color: rgba(240,239,230,.16); }
> .section-heading::after { background: rgba(200,241,105,.72); box-shadow: none; }
> .project-list { gap: 22px; }
> .project-card {
>   border: 1px solid rgba(240,239,230,.12);
>   border-radius: 5px;
>   box-shadow: 0 22px 70px rgba(0,0,0,.16);
>   transition: transform .55s cubic-bezier(.2,.75,.2,1), border-color .35s, box-shadow .4s;
> }
> .project-card:hover {
>   transform: translateY(-5px);
>   border-color: rgba(200,241,105,.42);
>   box-shadow: 0 30px 90px rgba(0,0,0,.3), 0 0 0 1px rgba(200,241,105,.06);
> }
> .project-visual { min-width: 0; overflow: hidden; background: #090a09; }
> .project-visual .project-image {
>   width: 100%;
>   height: 100%;
>   padding: clamp(12px, 2vw, 24px);
>   background: radial-gradient(ellipse at 50% 48%, #23251f, #0d0e0d 76%);
>   object-fit: contain;
>   transition: transform .8s cubic-bezier(.2,.75,.2,1), filter .5s;
> }
> .project-card:hover .project-visual .project-image { transform: scale(1.045); filter: saturate(1.08) brightness(1.04); }
> .project-visual::after { z-index: 1; inset: 65% 0 0; background: linear-gradient(transparent, rgba(8,9,8,.38)); }
> .project-image-label { z-index: 2; color: #f0efe7; }
> .project-info { position: relative; z-index: 2; padding: clamp(28px, 4vw, 60px); background: linear-gradient(135deg, #141512, #10110f); }
> .project-info h3 { transition: color .25s; }
> .project-card:hover .project-info h3 { color: var(--lime); }
> .project-detail {
>   position: relative;
>   display: inline-flex;
>   align-items: center;
>   gap: 20px;
>   padding: 10px 0;
>   border: 0;
>   border-bottom: 1px solid rgba(240,239,230,.34);
>   background: transparent;
>   color: #e4e4db;
>   cursor: pointer;
>   transition: color .25s, border-color .25s, gap .25s;
> }
> .project-detail:hover { gap: 27px; border-color: var(--lime); color: var(--lime); }
> .project-detail span { color: var(--lime); transition: transform .25s; }
> .project-detail:hover span { transform: translate(3px, -3px); }
> .mini-project {
>   border: 1px solid rgba(240,239,230,.12);
>   border-radius: 4px;
>   background: #11120f;
>   transition: transform .4s, border-color .35s, box-shadow .35s;
> }
> .mini-project:hover { transform: translateY(-5px); border-color: rgba(200,241,105,.4); box-shadow: 0 20px 55px rgba(0,0,0,.28); }
> .mini-project-image { width: 100%; object-fit: contain; transition: transform .65s cubic-bezier(.2,.75,.2,1), filter .4s; }
> .mini-project:hover .mini-project-image { transform: scale(1.035); filter: brightness(1.06); }
>
> /* Form fields and keyboard focus match the quieter visual language. */
> .contact-form { border-color: rgba(240,239,230,.13); border-radius: 5px; box-shadow: 0 22px 70px rgba(0,0,0,.18); }
> .contact-form input, .contact-form textarea { border-radius: 3px; }
> .contact-form input:focus, .contact-form textarea:focus { border-color: var(--lime); box-shadow: 0 0 0 3px rgba(200,241,105,.13); }
>
> @media (max-width: 1000px) {
>   .hero-stage { min-height: 690px; }
>   .hero-decoration { top: -22px; width: min(540px, 62vw); height: 500px; }
>   .hero-copy { padding-top: 338px; }
>   .hero h1.hero-title { font-size: clamp(82px, 13.5vw, 146px); }
>   .hero-side-note { top: 30%; font-size: 8px; }
>   .hero-side-note-left { left: 4px; }
>   .hero-side-note-right { right: 7px; max-width: 125px; }
> }
>
> @media (max-width: 720px) {
>   .site-header { top: 7px; width: calc(100% - 26px); height: 58px; padding: 0 15px; border-radius: 999px; }
>   .primary-nav { border: 1px solid rgba(240,239,230,.16); border-radius: 16px; background: rgba(12,13,12,.96); box-shadow: 0 20px 60px rgba(0,0,0,.42); }
>   main { padding-top: 78px; }
>   .hero { min-height: 0; padding-top: 17px; overflow: clip; }
>   .hero-topline { align-items: flex-start; gap: 10px; }
>   .hero-topline .eyebrow { font-size: 7px; line-height: 1.5; }
>   .hero-coordinate { display: none; }
>   .hero-stage { width: 100vw; min-height: 690px; margin-left: calc(50% - 50vw); }
>   .hero-decoration { top: 0; width: min(390px, 100vw); height: 390px; }
>   .hero-side-note { top: 31%; gap: 8px; font-size: 7px; }
>   .hero-side-note-left { left: 19px; }
>   .hero-side-note-right { right: 19px; max-width: 90px; }
>   .hero-side-note i { display: none; }
>   .hero-copy { width: calc(100vw - 38px); max-width: none; min-width: 0; margin-inline: auto; padding-top: 287px; }
>   .hero-kicker { margin-bottom: 8px; font-size: 7px; letter-spacing: .17em; }
>   .hero h1.hero-title {
>     max-width: calc(100vw - 36px);
>     flex-direction: column;
>     align-items: center;
>     gap: 0;
>     font-size: clamp(44px, 12.5vw, 90px);
>     line-height: .74;
>     letter-spacing: -.045em;
>     white-space: normal;
>     text-wrap: balance;
>   }
>   .hero-title span, .hero-title em { display: block; }
>   .hero-title i { position: absolute; right: 6%; bottom: 43%; margin: 0; font-size: 48px; }
>   .hero-bottom { width: 100%; min-width: 0; gap: 16px; margin-top: 22px; padding-inline: 8px; }
>   .hero-description { width: calc(100vw - 140px); max-width: 320px; font-size: 12px; line-height: 1.7; overflow-wrap: anywhere; }
>   .hero-actions { width: 100%; flex-wrap: wrap; gap: 8px; }
>   .hero-actions .button-primary { min-width: 0; justify-content: center; gap: 20px; padding: 13px 17px; }
>   .hero-actions .text-link { padding: 12px 15px; }
>   .hero-index { grid-template-columns: 1fr auto; gap: 8px; padding: 15px 0; font-size: 7px; }
>   .hero-index span:nth-child(2) { display: none; }
>   .section-shell, .page-shell { width: calc(100% - 38px); }
>   .section-pad { padding-block: 76px; }
>   .project-card, .project-card:nth-child(even) { border-radius: 4px; }
>   .project-visual { min-height: 0; aspect-ratio: 1.08; }
>   .project-visual .project-image { padding: 12px; }
>   .project-info { padding: 24px 19px 28px; }
>   .project-topline { gap: 12px; font-size: 7px; }
>   .project-topline span:last-child { text-align: right; }
>   .project-image-label { font-size: 7px; }
>   .contact-form { padding: 18px 15px; }
> }
>
> @media (max-width: 380px) {
>   .hero h1.hero-title { font-size: clamp(42px, 12.5vw, 52px); }
>   .hero-description { width: calc(100vw - 110px); }
>   .hero-side-note { display: none; }
>   .hero-index { font-size: 6px; }
>   .hero-actions { gap: 7px; }
>   .hero-actions .button-primary, .hero-actions .text-link { font-size: 9px; }
> }
>
> @media (prefers-reduced-motion: reduce) {
>   .hero-fallback, .hero-actions .button-primary, .hero-actions .text-link,
>   .project-card, .project-visual .project-image, .mini-project, .mini-project-image {
>     transition: none !important;
>   }
>   .hero-decoration { transform: translateX(-50%) !important; }
> }
> '@ | Set-Content -Encoding utf8 art-direction.css`
> - Ran ``@'
> from pathlib import Path
> p=Path('README.md');s=p.read_text(encoding='utf-8')
> s=s.replace('GSAP 3.15.1 (including ScrollTrigger), Lenis 1.3.27, and Three.js load from their CDNs; the page remains readable if those scripts are unavailable, but the enhanced motion and 3D scene will be disabled.','GSAP 3.15.1 (including ScrollTrigger) and Lenis 1.3.27 load from their CDNs. The portrait particle canvas and layout are local, so the signature hero remains available if those libraries are unavailable.')
> s=s.replace('Three.js renders the hero portrait as a responsive particle sculpture with pointer-reactive rotation and wireframe geometry. A regular image remains as a fallback when WebGL or the module CDN is unavailable.','A local 2D canvas turns the supplied portrait into a responsive halftone particle study. On desktop, particles move away from the pointer and settle back into the portrait; on touch devices and for reduced-motion preferences the scene stays still.')
> s=s.replace('The text reveal, interactive glow, and soft animated background treatments use small custom CSS/JavaScript patterns inspired by React Bits and Magic UI. The project remains framework-free.','The text reveal, card hover states, and soft animated backgrounds use small custom CSS/JavaScript patterns inspired by React Bits and Magic UI. `art-direction.css` contains the current editorial visual system; `styles.css` retains shared page components. The project remains framework-free.')
> p.write_text(s,encoding='utf-8')
> '@ | python -
> node --check app.js; node --check hero-scene.js; Select-String -Path README.md -Pattern 'Three|particle|art-direction' | ForEach-Object Line``
> - Ran `node --check app.js; node --check hero-scene.js; @'
> from pathlib import Path
> from html.parser import HTMLParser
> class Page(HTMLParser): pass
> for name in ['index.html','work.html','about.html']:
>  p=Path(name);Page().feed(p.read_text(encoding='utf-8'));print(name,'ok',len(p.read_bytes()),'bytes')
> for name in ['assets/favicon.svg','assets/vatsal-portrait-420.webp','assets/projects/vixora-dashboard-720.webp','art-direction.css']:
>  p=Path(name);print(name,'exists',p.exists(),'bytes',p.stat().st_size if p.exists() else 0)
> print('homepage order:',[line.strip().split('id="')[1].split('"')[0] for line in Path('index.html').read_text(encoding='utf-8').splitlines() if '<section id=' in line])
> '@ | python -`
>
> </details>
>
> The 390px Lighthouse screenshot now shows the full portrait, surname, supporting copy, and both actions inside the viewport; the responsive case/project sections remain one-column on phones. The final style rules are separated into a dedicated art-direction stylesheet, and I’ve corrected the README so it reflects the local canvas implementation instead of the removed Three.js scene. I’m refreshing both Lighthouse profiles against that cleaned-up version now.
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `@'
> import json
> for label in ['mobile','desktop']:
>  p=rf'C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-{label}.json';r=json.load(open(p,encoding='utf-8'));print(label,{k:round(v['score']*100) for k,v in r['categories'].items()})
>  print(' LCP',r['audits']['largest-contentful-paint'].get('displayValue'),'CLS',r['audits']['cumulative-layout-shift'].get('displayValue'),'console errors',len(r['audits']['errors-in-console']['details'].get('items',[])))
> '@ | python -
> Get-Item art-direction.css,hero-scene.js,app.js,index.html | Select-Object Name,Length`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();srv=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=srv.serve_forever,daemon=True).start()
> base=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--output=json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  for label,extra in [('mobile',['--form-factor=mobile']),('desktop',['--preset=desktop'])]:
>   path=rf'C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-{label}.json'
>   r=subprocess.run([*base,*extra,'--output-path='+path],cwd=root,text=True,capture_output=True,timeout=150)
>   print(label,'exit',r.returncode)
>   if r.returncode: print(r.stderr[-1200:])
> finally:srv.shutdown();srv.server_close()
> '@ | python -`
> - Ran `@'
> import json
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-mobile.json',encoding='utf-8'))
> for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift','interactive','max-potential-fid']:
>  a=r['audits'].get(k,{});print(k,a.get('displayValue'),a.get('score'))
> print('OPPS')
> for k,a in r['audits'].items():
>  if a.get('details',{}).get('type')=='opportunity' and a.get('score') not in (None,1):print(k,a.get('displayValue'),a.get('title'))
> '@ | python -`
>
> </details>
>
> The fresh mobile audit came in lower than the earlier run, mainly from a spike in main-thread blocking, while accessibility and SEO stayed at 100. Lighthouse can vary under local CPU/network throttling, so I’m repeating the mobile measurement by itself and checking its detailed timing before I call the result final.
>
> <details><summary>Ran 5 commands</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> cmd=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=mobile','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-mobile-repeat.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=150);print('exit',r.returncode);print(r.stderr[-500:])
> finally:s.shutdown();s.server_close()
> '@ | python -`
> - Ran `@'
> import json
> p=r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-mobile-repeat.json';r=json.load(open(p,encoding='utf-8'))
> print({k:round(v['score']*100) for k,v in r['categories'].items()})
> for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift','interactive']:
>  a=r['audits'][k];print(k,a.get('displayValue'),a.get('score'))
> print('console errors',r['audits']['errors-in-console']['details'].get('items',[]))
> '@ | python -`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> cmd=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--preset=desktop','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-desktop.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=150);print('exit',r.returncode);print(r.stderr[-500:])
> finally:s.shutdown();s.server_close()
> '@ | python -`
> - Ran `@'
> import json
> p=r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-desktop.json';r=json.load(open(p,encoding='utf-8'))
> print({k:round(v['score']*100) for k,v in r['categories'].items()})
> for k in ['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time','cumulative-layout-shift']:
>  print(k,r['audits'][k].get('displayValue'))
> print('console errors',r['audits']['errors-in-console']['details'].get('items',[]))
> '@ | python -`
> - Ran `@'
> import json,base64
> for label in ['mobile-repeat','desktop']:
>  p=rf'C:\Users\VATSAL\AppData\Local\Temp\portfolio-polished-{label}.json'
>  try:r=json.load(open(p,encoding='utf-8'))
>  except FileNotFoundError:continue
>  data=r['audits']['final-screenshot']['details']['data'];data=data.split(',',1)[1] if data.startswith('data:image') else data
>  out=rf'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-{label}.png';open(out,'wb').write(base64.b64decode(data));print(out)
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> Viewed an image
>
> The repeated Lighthouse run settled back at **91 mobile** and the desktop run is **96**; both score 100 for Accessibility, Best Practices, and SEO, with no console errors. I spotted one extra mobile image transfer in the report—the page preloaded the larger portrait while the phone chose the smaller one—so I’m aligning the preload with the responsive `srcset` and measuring once more.
>
> <details><summary>Ran 7 commands</summary>
>
> - Ran `@'
> from pathlib import Path
> p=Path('index.html');s=p.read_text(encoding='utf-8')
> s=s.replace('<link rel="preload" as="image" href="assets/vatsal-portrait-840.webp" fetchpriority="high" />','<link rel="preload" as="image" href="assets/vatsal-portrait-420.webp" imagesrcset="assets/vatsal-portrait-420.webp 420w, assets/vatsal-portrait-840.webp 840w, assets/vatsal-portrait.webp 1254w" imagesizes="(max-width: 700px) 300px, 500px" fetchpriority="high" />')
> p.write_text(s,encoding='utf-8')
> p=Path('hero-scene.js');s=p.read_text(encoding='utf-8').replace('    const gap = 1.35;\n','').replace('          phase: (x * 17 + y * 31) % 100 / 100,\n          gap\n','          phase: (x * 17 + y * 31) % 100 / 100\n');p.write_text(s,encoding='utf-8')
> '@ | python -
> node --check hero-scene.js; node --check app.js`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> cmd=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=mobile','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile-audit.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=150);print('exit',r.returncode);print(r.stderr[-400:])
> finally:s.shutdown();s.server_close()
> '@ | python -`
> - Ran `@'
> import json
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile-audit.json',encoding='utf-8'))
> print({k:round(v['score']*100) for k,v in r['categories'].items()})
> for k in ['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift']:
>  print(k,r['audits'][k].get('displayValue'))
> '@ | python -`
> - Ran `(Get-Content index.html -Raw -Encoding utf8).Replace('imagesizes="(max-width: 700px) 300px, 500px"','imagesizes="(max-width: 700px) 310px, 500px"') | Set-Content -Encoding utf8 index.html`
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> cmd=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=mobile','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile-audit.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:
>  r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=150);print('exit',r.returncode)
> finally:s.shutdown();s.server_close()
> '@ | python -`
> - Ran `@'
> import json
> r=json.load(open(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-final-mobile-audit.json',encoding='utf-8'))
> print({k:round(v['score']*100) for k,v in r['categories'].items()})
> for k in ['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift']:
>  print(k,r['audits'][k].get('displayValue'))
> for k in ['network-requests','uses-responsive-images']:
>  a=r['audits'][k]['details'];
>  for it in a.get('items',[]):
>   if 'vatsal-portrait' in str(it.get('url','')): print(k,it)
> '@ | python -`
> - Ran `rg -n 'hero-title|hero-stage|Portfolio art|Portrait-led|Project work|const canvas|function buildParticles|motionCapable|prefers-reduced' index.html art-direction.css hero-scene.js;`
>
> </details>
</details>

You were right: the previous pass felt generic, and its story put biography before proof. I’ve reworked the opening and moved selected work ahead of the longer personal context, using the supplied video as direction for planning and refinement rather than copying its implementation. [Video](https://youtu.be/gq8TxEyE7mo)

The new hero uses a local canvas to turn your portrait into a pointer-reactive particle study. It stays still on touch devices and when reduced motion is enabled. I also added an editorial serif treatment, clearer work and résumé actions, stronger project hover states, and mobile sizing to keep the name and copy within the screen. The visual rules are organized in [art-direction.css](/E:/portfolio/art-direction.css); the hero markup and particle behavior are in [index.html](/E:/portfolio/index.html:32) and [hero-scene.js](/E:/portfolio/hero-scene.js:1).

I changed the portfolio header’s olive-tinted border to a neutral one. If the same yellow outline remains around other apps, that outline is outside the website—likely a Windows window-border accent—and portfolio CSS can’t change it.

**Lighthouse:** desktop scored **96 Performance**; mobile runs varied from **81 to 91** as blocking time fluctuated. Accessibility, Best Practices, and SEO scored **100** in both profiles. Mobile LCP was 3.1 s and CLS was 0.001; neither audit reported console errors. These were local, throttled runs, so production compression and caching may change the scores.

I reviewed the REA browser-observation guide, but its browser inspection uses a configured Chrome CDP connection, which isn’t available in this environment; I haven’t claimed REA ran the inspection. [REA guide](https://github.com/morluto/rea/blob/main/docs/guides/web/browser-observation.md)

> good but see at many places like given screenshot text or fonts are to close and mixed up and not redable so fix it. still hero section needed to proper refine and fix these CTA button placement properly.
>
> see below conversation with chatgpt on web ? and decide weather to take any insigh seriuosly form it. it just for refrence if you liek or recomded than implement by custmized or direct as you want just make it beautifulll and premium look .
>
> prompt :
>
> see here should i use third contradic color in my protoflio ? for better lighhitning porint lie CTA button or text etcs . just to highlight (like i heard 60 30 10 rule ) primary ,secondary and third color . i think blue color any shade would be better ? specially elctric blue like color.
>
> repsonse :&#x20;
>
> Honestly, **electric blue can work beautifully with your portfolio**, but I would be careful about how you introduce it.
>
> Looking at your screenshot, your current design has a very specific identity: dark, premium, editorial, minimal, and slightly futuristic. It feels more like a designer/developer's personal brand than a typical developer portfolio.
>
> I wouldn't want you to lose that identity by introducing too many colors.
>
> ## **1. Your current color system**
>
> Your portfolio currently uses approximately this palette:
>
> **Primary — Deep black**
>
> \#090B09 · Background, large surfaces
>
> 60%
>
> **Secondary — Warm ivory**
>
> \#F0EEE5 · Headlines, text, buttons
>
> 30%
>
> **Accent — Electric lime**
>
> \#C5F45B · Highlights, labels, indicators
>
> 10%
>
> Actually, you already have a strong 60-30-10 color system.
>
> ## **2. Which direction should you choose?**
>
> Here are three directions worth considering.
>
> [Modern Minimal Portfolio UI/UX by Reconfort on Dribbble](https://images.openai.com/static-rsc-4/0d748tci7h21fch1wQ6fk3xdPdvhvfmJjdJNunUkNyxyJblniAcjLGuhS1hPLdr1LKwaJrlA43ZwuqzzOJ--8-_BVKrEY6k85VL2cmbkK296Buboj4zoAdEUMQhQ1nm0b0o7YOFKB_ZKdPnrhyZ1EKvY4RzrbISExWbnVXBu3w0?purpose=inline)
>
> **Option A — Keep electric lime**
>
> My current recommendation
>
> - Distinctive visual identity.
> - Excellent contrast against black.
> - Feels creative, premium and experimental.
> - Matches your existing design perfectly.
>
> [Halcyon X — Website Template for Framer](https://images.openai.com/static-rsc-4/-beDgmyIlYSt2Cfa1YZtOuXqKhDjTzO8KFkY2fa_DPPoDuxSghF8aLe-Ir46_nqHD93oG0eJfGQUBlUSXgX-WusY8M_6aKD6USOw9KNdSqgZx9XqgR225vVCHEVFRPBOkcu6boC92E37U4u4BukbkZlvL6y1dDEJumOBBhxzm2s?purpose=inline)
>
> **Option B — Electric cobalt blue**
>
> - More futuristic and technology-oriented.
> - Strong association with software and digital products.
> - Great for interactive elements and CTA hover states.
> - Can feel slightly more conventional if overused.
>
> [VERTEX | Website for the IT studio :: Behance](https://images.openai.com/static-rsc-4/doPMUBZcVAPHXS6LmxBQ6enD87qZ-Pr_R-OEyO6R3MqI4p653Dn-7PowNIEDPzkRzkuSO6A9CdjVpVPQZ6GH9ppFFt7Z8pCCEL1Dv-3X9YTf9djwEwUScMhDxC4LDKr2Jc-kGta5tRecnEtuw0BouNuycFEv2AlOxscu7aAOwH0?purpose=inline)
>
> **Option C — Electric violet**
>
> - More experimental and creative.
> - Can create a futuristic visual atmosphere.
> - Less predictable than conventional blue.
> - Needs careful control to avoid looking like a generic AI website.
>
> ## **3. My suggested electric blue palette**
>
> If you really want blue, I'd choose cobalt/electric blue rather than ordinary blue or cyan.
>
> ## **Black × Ivory × Electric Blue**
>
> \#090B0F
>
> Black
>
> \#F0EEE5
>
> Ivory
>
> \#477BFF
>
> Accent
>
> \#222630
>
> Surface
>
> **V. VATSAL VADGAMA**
>
> WORK　 ABOUT　 CONTACT
>
> **01 / INTRODUCTION**
>
> # **Building things that matter.**
>
> Turning complex problems into useful products and reliable systems.
>
> **Explore my work ↗**
>
> View résumé ↗
>
> AVAILABLE FOR OPPORTUNITIES
>
> Illustrative palette preview, not a redesign of your actual page.
>
> ## **4. Where should you use the accent color?**
>
> This is more important than simply choosing a color.
>
> |   |
> | - |
>
> Element
>
> |   |
> | - |
>
> Recommended treatment
>
> |   |
> | - |
>
> Main background
>
> |   |
> | - |
>
> Deep black
>
> |   |
> | - |
>
> Main headings
>
> |   |
> | - |
>
> Warm ivory
>
> |   |
> | - |
>
> Body text
>
> |   |
> | - |
>
> Muted ivory/grey
>
> |   |
> | - |
>
> Primary CTA
>
> |   |
> | - |
>
> Ivory background, black text
>
> |   |
> | - |
>
> Secondary CTA
>
> |   |
> | - |
>
> Transparent with subtle border
>
> |   |
> | - |
>
> Small section labels
>
> |   |
> | - |
>
> Electric blue
>
> |   |
> | - |
>
> Active navigation
>
> |   |
> | - |
>
> Electric blue indicator
>
> |   |
> | - |
>
> Important numbers
>
> |   |
> | - |
>
> Electric blue
>
> |   |
> | - |
>
> Links and hover states
>
> |   |
> | - |
>
> Electric blue
>
> |   |
> | - |
>
> Decorative grid
>
> |   |
> | - |
>
> Very subtle grey
>
> |   |
> | - |
>
> Cursor interactions
>
> |   |
> | - |
>
> Blue glow, very subtle
>
> **One important rule:** Don't make every button blue. Accent colors work because they are relatively rare.
>
> ## **5. My final recommendation**
>
> I'd actually lean towards keeping your existing lime accent for now. It gives your portfolio more personality than blue.
>
> But if you want to move towards a more futuristic, software-engineering-oriented identity, I would choose:
>
> - Deep black: `#090B0F`
> - Warm ivory: `#F0EEE5`
> - Electric cobalt: `#477BFF`
>
> And replace lime consistently rather than adding blue on top of lime.
>
> **The biggest mistake would be using lime + blue + purple + cyan together.** Your portfolio benefits from restraint.
>
> My preference: **Black + Ivory + Electric Cobalt**, if you want a stronger technology-focused identity; **Black + Ivory + Lime**, if you want a more distinctive editorial identity.
>
> User context
>
> Images:
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-9e163d67-215a-450a-a5b2-8a5252772159.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-dc039026-4295-4d4c-8a27-e82c4b816e7f.png`

<details><summary>19 previous messages</summary>

> I can see the two main issues in your screenshots: the site-wide serif font change made section headings collide, and the hero caption is too close to the name while its CTAs fall below the first screen. I’ll keep lime as the single accent—it already gives you a clear identity—and fix the type hierarchy, spacing, and hero CTA row instead of adding blue on top.
>
> <details><summary>Edited a file, ran 3 commands</summary>
>
> - Ran `Get-Content styles.css -TotalCount 1; Select-String -Path styles.css,art-direction.css -Pattern '--display|hero h1.hero-title|hero-bottom|hero-stage|\.work-intro h2' | Select-Object -First 15 | ForEach-Object { $_.Line.Substring(0,[Math]::Min(300,$_.Line.Length)) }`
> - Ran `Get-Content art-direction.css -TotalCount 16; rg -n 'hero-title|hero-stage|hero-bottom|\.work-intro h2|letter-spacing:-\.075em' art-direction.css styles.css | Select-Object -First 25`
> - Wrote `./art-direction.css` (+57 -28)
> - Wrote `./art-direction.css` (+0 -6)
> - Ran `@'
> from pathlib import Path
> p=Path('index.html');s=p.read_text(encoding='utf-8');s=s.replace('            <span class="portrait-index">V / 01</span>\n','');p.write_text(s,encoding='utf-8')
> '@ | python -`
>
> </details>
>
> I found the cause: Instrument Serif had become the shared display font, so it was applied to project and section headings as well as your name. I’ve limited it to the hero, restored the sans display font for the rest of the site, eased the tracking, removed the overlapping portrait tag, and moved the CTAs beside the intro copy on desktop. They stack below the copy on smaller screens.
>
> <details><summary>Ran a command</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-refined-desktop.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=1800','--window-size=1600,1000',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=45);print('render',r.returncode,out.stat().st_size if out.exists() else 0);s.shutdown();s.server_close()
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Edited 2 files, ran 2 commands</summary>
>
> - Ran `Get-Content app.js | Select-Object -Skip 138 -First 25; Get-Item C:\Users\VATSAL\AppData\Local\Temp\portfolio-refined-desktop.png | Select-Object Length,LastWriteTime`
> - Wrote `./app.js` (+7 -7)
> - Wrote `./art-direction.css` (+9 -1)
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-refined-desktop.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=3000','--window-size=1600,1000',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=45);print('render',r.returncode,out.stat().st_size if out.exists() else 0);s.shutdown();s.server_close()
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `rg -o "[^}]*hero-actions[^}]*}" styles.css art-direction.css | Select-Object -Last 18; Select-String -Path index.html -Pattern 'hero-actions|hero-bottom' | ForEach-Object { $_.Line.Trim().Substring(0,[Math]::Min(850,$_.Line.Trim().Length)) }`
> - Ran `Select-String -Path index.html -Pattern 'hero-description|hero-actions' -Context 1,3 | ForEach-Object { $_.Context.PreContext; $_.Line; $_.Context.PostContext };`
>
> </details>
>
> The desktop preview confirms the headings are readable now, but the CTAs still aren’t showing in the captured first screen. I’m checking their rendered position and visibility before I finalize, because they need to be plainly visible alongside the hero copy.
>
> <details><summary>Ran a command</summary>
>
> - Ran ``@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import threading,subprocess
> root=Path.cwd()
> class H(SimpleHTTPRequestHandler):
>  def do_GET(self):
>   if self.path=='/':
>    d=(root/'index.html').read_text(encoding='utf-8')
>    js='''<script>setTimeout(()=>{let q=s=>{let e=document.querySelector(s),r=e.getBoundingClientRect(),c=getComputedStyle(e);return `${s}: x${r.x.toFixed(0)} y${r.y.toFixed(0)} w${r.width.toFixed(0)} h${r.height.toFixed(0)} opacity${c.opacity} display${c.display} vis${c.visibility}`};let d=document.createElement("pre");d.style="position:fixed;z-index:999999;top:100px;right:20px;background:#cf0;color:#000;font:12px monospace;padding:10px;white-space:pre-wrap";d.textContent=[q(".hero-bottom"),q(".hero-description"),q(".hero-actions"),q(".hero-actions .button-primary"),q(".hero-actions .text-link"),`vw=${innerWidth} scroll=${scrollY}`].join("\\n");document.body.append(d)},2200)</script></body>'''
>    d=d.replace('</body>',js);b=d.encode();self.send_response(200);self.send_header('Content-Type','text/html;charset=utf-8');self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b);return
>   return super().do_GET()
> s=ThreadingHTTPServer(('127.0.0.1',8767),H);threading.Thread(target=s.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-cta-debug.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=3000','--window-size=1600,1000',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=45);print('render',r.returncode,out.exists(),out.stat().st_size if out.exists() else 0);s.shutdown();s.server_close()
> '@ | python -``
>
> </details>
>
> Viewed an image
>
> <details><summary>Edited 2 files, ran 2 commands</summary>
>
> - Wrote `./art-direction.css` (+1 -0)
> - Wrote `./app.js` (+2 -2)
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> out=Path(r'C:\Users\VATSAL\AppData\Local\Temp\portfolio-refined-desktop-final.png')
> cmd=[r'C:\Program Files\Google\Chrome\Application\chrome.exe','--headless=new','--no-sandbox','--disable-gpu','--hide-scrollbars','--virtual-time-budget=2200','--window-size=1600,1000',f'--screenshot={out}','http://127.0.0.1:8767/']
> r=subprocess.run(cmd,cwd=root,capture_output=True,timeout=45);print('render',r.returncode,out.stat().st_size if out.exists() else 0);s.shutdown();s.server_close()
> '@ | python -`
> - Ran `Get-Item C:\Users\VATSAL\AppData\Local\Temp\portfolio-refined-desktop-final.png -ErrorAction SilentlyContinue | Select-Object Length,LastWriteTime`
>
> </details>
>
> I traced the CTA issue to a stale column direction overriding the new desktop row, which had pushed the buttons below the visible area. The desktop layout now explicitly uses a two-column copy/actions row; the smaller-screen breakpoint intentionally stacks them. I’ve also made the CTA and supporting copy stay visible while their short entrance motion runs. I’m checking the final mobile rendering now.
>
> <details><summary>Ran a command</summary>
>
> - Ran `@'
> from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
> from functools import partial
> from pathlib import Path
> import subprocess,threading
> root=Path.cwd();s=ThreadingHTTPServer(('127.0.0.1',8767),partial(SimpleHTTPRequestHandler,directory=str(root)));threading.Thread(target=s.serve_forever,daemon=True).start()
> cmd=['node',r'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache\_npx\ed05d372d6adb15e\node_modules\lighthouse\cli\index.js','http://127.0.0.1:8767/','--only-categories=performance,accessibility,best-practices,seo','--form-factor=mobile','--output=json',r'--output-path=C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.json',r'--chrome-path=C:\Program Files\Google\Chrome\Application\chrome.exe','--chrome-flags=--headless=new --no-sandbox --disable-gpu','--quiet']
> try:r=subprocess.run(cmd,cwd=root,text=True,capture_output=True,timeout=150);print('exit',r.returncode)
> finally:s.shutdown();s.server_close()
> '@ | python -`
>
> </details>
>
> Context compaction
>
> Source: automatic
> Status: completed
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `if (Test-Path 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.json') { Get-Item 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.json' | Select-Object FullName,Length,LastWriteTime | Format-List; $r = Get-Content 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.json' -Raw | ConvertFrom-Json; $r.categories.PSObject.Properties | ForEach-Object { "{0}: {1}" -f $_.Name, [math]::Round($_.Value.score * 100) }; foreach ($k in @('first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift')) { $a = $r.audits.$k; "{0}: {1} {2}" -f $k, $a.displayValue, $a.score }; } else { 'mobile report missing' }; node --check app.js; node --check hero-scene.js`
> - Ran `$report = Get-Content 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.json' -Raw | ConvertFrom-Json; $data = $report.audits.'final-screenshot'.details.data; if ($data -match '^data:image/[^;]+;base64,(.+)$') { [IO.File]::WriteAllBytes('C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.png', [Convert]::FromBase64String($Matches[1])); Get-Item 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-readable-mobile.png' | Select-Object FullName,Length } else { "final screenshot data missing or format unexpected: $($data.Substring(0,[Math]::Min(100,$data.Length)))" }`
>
> </details>
>
> Viewed an image
>
> The mobile audit finished. The hero now keeps the name, intro, and both actions together on a narrow screen; I’m checking the final desktop layout and change set before I wrap up.
>
> <details><summary>Edited a file, ran 12 commands</summary>
>
> - Ran `git diff --stat; git status --short; rg -n "--display|hero h1\.hero-title|hero-bottom|hero-actions|portrait-index|hero-description|@media \(max-width: 900px\)" art-direction.css styles.css app.js index.html`
> - Ran `rg -n -- "--display|hero h1\.hero-title|hero-bottom|hero-actions|portrait-index|hero-description|@media \(max-width: 900px\)" art-direction.css styles.css app.js index.html; Get-ChildItem -Force | Select-Object Name,Mode,Length | Format-Table -AutoSize; Get-ChildItem 'C:\Users\VATSAL\AppData\Local\Temp' -Filter '*lighthouse*' | Select-Object Name,Length,LastWriteTime | Format-Table -AutoSize`
> - Ran `$f=Get-Content 'art-direction.css'; for($i=1;$i -le 30;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; for($i=135;$i -le 230;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; for($i=335;$i -le 405;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; rg -n -- "art-direction.css|styles.css" index.html about.html work.html`
> - Ran `$f=Get-Content 'art-direction.css'; for($i=24;$i -le 140;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; $f=Get-Content 'styles.css'; foreach($range in @(@(18,35),@(182,214),@(70,84))){ for($i=$range[0];$i -le $range[1];$i++){ '{0}: {1}' -f $i,$f[$i-1] } }`
> - Ran `rg -n -- "work-intro h2|approach-header h2|section-heading|letter-spacing:-\.075em|letter-spacing:-\.07em|letter-spacing: -\.075em|letter-spacing: -.075em" styles.css art-direction.css; rg -n -- "hero-copy|hero-stage|font: 700 clamp|font-size:clamp" art-direction.css | Select-Object -First 50`
> - Ran `$f=Get-Content 'art-direction.css'; for($i=240;$i -le 275;$i++){ '{0}: {1}' -f $i,$f[$i-1] };`
> - Ran `rg -n -- "Instrument Serif|work-intro|Shipping is the work|Ideas are easy" .`
> - Ran `$f=Get-Content 'index.html'; for($i=22;$i -le 59;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; $f=Get-Content 'art-direction.css'; for($i=315;$i -le 340;$i++){ '{0}: {1}' -f $i,$f[$i-1] };`
> - Ran `python -c "from pathlib import Path; import re; s=Path('styles.css').read_text();\nfor m in re.finditer(r'([^{}]+)\\{([^{}]+)\\}',s):\n if 'letter-spacing' in m.group(2) and any(x in m.group(1) for x in ['h2','h3','h1','title','work-intro']): print(m.group(1).strip(), re.search(r'letter-spacing\\s*:\\s*([^;}]+)',m.group(2)).group(1))"`
> - Wrote `./art-direction.css` (+12 -4)
> - Ran `Get-Command lighthouse,node,chrome,msedge -ErrorAction SilentlyContinue | Select-Object Name,Source | Format-Table -AutoSize; Get-ChildItem 'C:\Users\VATSAL\AppData\Local\Temp' -Filter 'portfolio-readable-*' | Select-Object Name,Length,LastWriteTime | Format-Table -AutoSize; node --check app.js; node --check hero-scene.js`
> - Ran `npm root -g; npm list -g --depth=0; Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.LocalPort -in 4173,5500,8000,8080,9222 } | Select-Object LocalAddress,LocalPort,OwningProcess | Format-Table -AutoSize`
> - Ran `rg --files -g AGENTS.md -g agent.md -g AGENT.md; rg -n -- "Keep the large editorial type|shorter laptop|hero-bottom \{|about h2, \.work-intro" art-direction.css; rg -n -- "hero h1\.hero-title|hero-actions" art-direction.css; rg -n -- "hero-description|hero-actions" app.js`
>
> </details>
</details>

I loosened the spacing on large headings across the work, about, journey, and contact sections, so letters no longer crowd together. The hero keeps its serif name treatment, while the intro text and CTAs now have a clearer layout. Shorter laptop and tablet screens also get a more compact hero to keep the actions in view.

I kept the lime accent. Adding electric blue alongside it would weaken the palette’s focus; switching to blue would work better as a consistent palette change.

Changed [art-direction.css](/E:/portfolio/art-direction.css). I checked the mobile render and JavaScript syntax. The latest mobile Lighthouse capture scored **85 Performance** and **100** for Accessibility, Best Practices, and SEO; it was taken before the final CSS-only spacing adjustments.

> is thisgood to deisgn like this current with 10% this color (
>
> - Electric cobalt: `#477BFF` )  just an suggetion i you would like ?&#x20;
> - and move soil analysis project to more project section  with replacement of that aurapass.
>
> &#x20;take this also for auraass project photo.&#x20;
>
> also keep this color changin revertible means i just want to test how it looks so be ready for rollback to current cause if i dont like that . only for this color now project replacmeent and other stuffs. in mobile properly make it reponsiveness and polished properly. also in those project card are can be animated like one ver other like pages cards . means like animated one over other looking on scroll first project comes properly and than at some point after scroll second project come and place over it and looks like 3 feeling of stack of projects ? and make that form placeholder like it filled by client not recurter. also send message not working can we redirect to mail after valdiating form properly so user just needed to click send cause all details from the form and proper generalize strucred email is ready with pre entered value ?&#x20;
>
> see here should i use third contradic color in my protoflio ? for better lighhitning porint lie CTA button or text etcs . just to highlight (like i heard 60 30 10 rule ) primary ,secondary and third color . i think blue color any shade would be better ? specially elctric blue like color.
>
> User context
>
> Images:
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-ff7f9b34-cdc4-42f6-bc78-154f79cc7130.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-457939aa-45ef-4246-9295-f2840fff22ec.png`
> - `C:/Users/VATSAL/AppData/Local/Temp/codex-clipboard-40b47dc9-e1e9-4a0d-934a-a1ca9d1c9c59.png`

<details><summary>18 previous messages</summary>

> I’ll treat this as a reversible cobalt preview: one accent token will control the highlight color so it can be switched back cleanly. I’m checking how the featured and “More projects” entries are currently wired, then I’ll swap the projects, make the contact form prepare a validated email draft, and tune the mobile card flow.
>
> <details><summary>Ran 2 commands</summary>
>
> - Ran `rg -n -- "AuraPass|Soil|soil|more-work|More projects|other-work|project-card|contact-form|mailto|#c8f169|#a9d84b|--lime|--accent" index.html work.html about.html app.js hero-scene.js styles.css art-direction.css README.md; Get-ChildItem assets -Recurse | Select-Object FullName,Length | Format-Table -AutoSize`
> - Ran `$f=Get-Content 'index.html'; for($i=60;$i -le 78;$i++){ "--- index.html:$i ---"; $f[$i-1] }; $f=Get-Content 'app.js'; for($i=1;$i -le 70;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; for($i=240;$i -le 290;$i++){ '{0}: {1}' -f $i,$f[$i-1] };`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 8 commands</summary>
>
> - Ran `$f=Get-Content 'app.js'; for($i=130;$i -le 245;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; $f=Get-Content 'art-direction.css'; for($i=255;$i -le 321;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; $f=Get-Content 'work.html'; for($i=18;$i -le 26;$i++){ "--- work:$i ---"; $f[$i-1] }; Get-Command magick,python,py,ffmpeg -ErrorAction SilentlyContinue | Select-Object Name,Source | Format-Table -AutoSize`
> - Ran `python -c "from PIL import Image; print(Image.__version__)"; $img=[System.Drawing.Image]::FromFile('C:\Users\VATSAL\AppData\Local\Temp\codex-clipboard-ff7f9b34-cdc4-42f6-bc78-154f79cc7130.png'); "AuraPass source: $($img.Width)x$($img.Height)"; $img.Dispose();`
> - Ran `rg -o --no-filename '#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?' styles.css art-direction.css app.js hero-scene.js index.html work.html about.html | Sort-Object | Group-Object | Sort-Object Count -Descending | Select-Object Name,Count | Format-Table -AutoSize; rg -n -- "\.case-image-wrap|\.case-aurapass|\.project-list|\.contact-form|\.project-dialog" styles.css art-direction.css`
> - Ran `rg -o --no-filename '#c8f169[0-9a-fA-F]*|rgba\(\s*200,\s*241,\s*105,\s*[^)]*\)' styles.css art-direction.css app.js hero-scene.js index.html work.html | Sort-Object | Group-Object | Sort-Object Count -Descending | Select-Object Name,Count | Format-Table -AutoSize; rg -n -- "#c8f169|200,241,105|200, 241, 105|c8f169|lime" hero-scene.js app.js`
> - Ran `$f=Get-Content 'hero-scene.js'; for($i=1;$i -le 130;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; Get-Content 'styles.css' -TotalCount 1 | ForEach-Object { $_.Substring(0,[Math]::Min(1200,$_.Length)) }`
> - Ran `$sourceImage = 'C:\Users\VATSAL\AppData\Local\Temp\codex-clipboard-ff7f9b34-cdc4-42f6-bc78-154f79cc7130.png'; $targetDir = 'E:\portfolio\assets\projects'; $targetPng = Join-Path $targetDir 'aurapass-project-source.png'; Copy-Item -LiteralPath $sourceImage -Destination $targetPng -Force; @'
> from pathlib import Path
> from PIL import Image
> root = Path(r'E:\portfolio\assets\projects')
> source = root / 'aurapass-project-source.png'
> with Image.open(source) as im:
>     im = im.convert('RGB')
>     for width in (720, 1280):
>         height = round(im.height * width / im.width)
>         resized = im.resize((width, height), Image.Resampling.LANCZOS)
>         output = root / f'aurapass-product-{width}.webp'
>         resized.save(output, 'WEBP', quality=84, method=6)
>         print(f'{output.name}: {width}x{height}, {output.stat().st_size} bytes')
> '@ | python -; Remove-Item -LiteralPath $targetPng`
> - Ran `@'
> from pathlib import Path
> import re
>
> for name in ('styles.css', 'art-direction.css'):
>     path = Path(name)
>     text = path.read_text(encoding='utf-8')
>     text = text.replace('--line:#343830;--lime:#c8f169;--lime-dark:#a9d84b;', '--line:#343830;--accent:#c8f169;--accent-rgb:200,241,105;--lime:var(--accent);--lime-dark:#a9d84b;')
>     text = text.replace('--accent:#c8f169;', '--accent:__PORTFOLIO_LIME_FALLBACK__;')
>     def hex_alpha(match):
>         suffix = match.group(1)
>         if not suffix:
>             return 'var(--lime)'
>         alpha = int(suffix, 16) / 255
>         return f'rgba(var(--accent-rgb), {alpha:.3g})'
>     text = re.sub(r'#c8f169([0-9a-fA-F]{2})?', hex_alpha, text, flags=re.I)
>     text = re.sub(r'rgba\(\s*200,\s*241,\s*105,\s*([.\d]+)\s*\)', r'rgba(var(--accent-rgb), \1)', text, flags=re.I)
>     text = text.replace('--accent:__PORTFOLIO_LIME_FALLBACK__;', '--accent:#c8f169;')
>     if name == 'art-direction.css':
>         text = text.replace(':root {\n  --display:', ':root {\n  /* Preview-only cobalt study; restore #c8f169 / 200,241,105 to roll back. */\n  --accent: #477BFF;\n  --accent-rgb: 71,123,255;\n  --lime: var(--accent);\n  --lime-dark: #315fe5;\n  --display:')
>     path.write_text(text, encoding='utf-8')
> '@ | python -; @'
> from pathlib import Path
> p = Path('hero-scene.js')
> s = p.read_text(encoding='utf-8')
> s = s.replace('  const pointer = { x: -1000, y: -1000, active: false };', '  const theme = getComputedStyle(document.documentElement);\n  const accent = theme.getPropertyValue("--accent").trim() || "#c8f169";\n  const accentRgb = theme.getPropertyValue("--accent-rgb").trim() || "200,241,105";\n  const pointer = { x: -1000, y: -1000, active: false };')
> s = s.replace('color: warm ? "#c8f169" :', 'color: warm ? accent :')
> s = s.replace('"rgba(200,241,105,.3)"', '"rgba(" + accentRgb + ",.3)"')
> s = s.replace('"rgba(200,241,105,.82)"', '"rgba(" + accentRgb + ",.82)"')
> p.write_text(s, encoding='utf-8')
> '@ | python -; rg -o --no-filename '#c8f169[0-9a-fA-F]*|rgba\(\s*200,\s*241,\s*105,\s*[^)]*\)' styles.css art-direction.css hero-scene.js`
> - Ran `rg -n -- '#c8f169|accent|rgba\(var\(--accent-rgb\)' styles.css art-direction.css hero-scene.js`
>
> </details>
>
> I confirmed the homepage currently features Vixora, ChemiCrown, and Soil Signals, while AuraPass sits in “More projects.” I’m swapping those two placements: AuraPass becomes the third featured build using your supplied screen, and Soil Signals moves into “More projects.” I’ll also make the long case stories match that order.
>
> <details><summary>Edited 2 files, ran 9 commands</summary>
>
> - Ran `@'
> from pathlib import Path
> import re
>
> index_path = Path('index.html')
> s = index_path.read_text(encoding='utf-8')
> soil_card = re.search(r'<article class="project-card project-soil".*?</article>', s, flags=re.S)
> assert soil_card, 'featured Soil card not found'
> soil_mini = '''<article class="mini-project" data-project="soil"><img class="mini-project-image" src="assets/projects/soil-analysis-640.webp" srcset="assets/projects/soil-analysis-640.webp 640w, assets/projects/soil-analysis.webp 1024w" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 50vw, 50vw" alt="Soil Signals spectrometer analysis project interface" loading="lazy" decoding="async" /><div class="mini-project-copy"><span>01 / APPLIED MACHINE LEARNING</span><h3>Soil Signals <button data-open="soil" aria-label="View Soil Signals project notes">↗</button></h3><p>A HackNUthon finalist project turning spectrometer readings into useful soil indicators. The model comparison reached an R² score of 0.89.</p><div class="tag-row"><span>Python</span><span>Scikit-learn</span><span>CatBoost</span><span>LightGBM</span></div></div></article>'''
> aurapass_main = '''<article class="project-card project-aurapass" data-project="aurapass"><div class="project-visual"><img class="project-image" src="assets/projects/aurapass-product-720.webp" srcset="assets/projects/aurapass-product-720.webp 720w, assets/projects/aurapass-product-1280.webp 1280w" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 50vw, 700px" alt="AuraPass biometric attendance and access control product interface" loading="lazy" decoding="async" /><span class="project-image-label">PRODUCT SYSTEM <i>03 / 03</i></span></div><div class="project-info"><div class="project-topline"><span>03 — COMPUTER VISION SYSTEMS</span><span>EDGE AUTH · BIOMETRICS</span></div><h3>AuraPass<span class="project-arrow">↗</span></h3><p>An on-premise identity system combining facial attendance, liveness checks, edge verification, access control, and auditable operations.</p><div class="tag-row"><span>React 19</span><span>Flask / Gevent</span><span>Celery</span><span>PostgreSQL</span><span>Redis</span><span>Docker</span></div><button class="project-detail" data-open="aurapass">View project notes <span>↗</span></button></div></article>'''
> s = s[:soil_card.start()] + aurapass_main + s[soil_card.end():]
> aurapass_mini = re.search(r'<article class="mini-project" data-project="aurapass".*?</article>', s, flags=re.S)
> assert aurapass_mini, 'AuraPass mini project card not found'
> s = s[:aurapass_mini.start()] + soil_mini + s[aurapass_mini.end():]
> s = s.replace('<span>02 / AI CAREER TOOLS</span>', '<span>02 / AI CAREER TOOLS</span>', 1)
> s = s.replace('<span>03 / SERVICE MARKETPLACE</span>', '<span>03 / SERVICE MARKETPLACE</span>', 1)
> s = s.replace('<span>04 / SYSTEMS PROGRAMMING</span>', '<span>04 / SYSTEMS PROGRAMMING</span>', 1)
> old_copy = 'Interested in internship opportunities, thoughtful products, and teams that care about how things work. If you think there’s a fit, send me a note.'
> new_copy = 'Planning a product, platform, or workflow that needs thoughtful engineering? Tell me what you are trying to solve, and I’ll reply with practical next steps.'
> assert old_copy in s
> s = s.replace(old_copy, new_copy, 1)
> s = s.replace('<form class="contact-form" id="contact-form" action="https://formsubmit.co/vatsalvadgama05@gmail.com" method="POST">', '<form class="contact-form" id="contact-form" action="mailto:vatsalvadgama05@gmail.com" method="POST" enctype="text/plain">', 1)
> s = s.replace('<input type="text" name="_honey" class="form-honey" tabindex="-1" autocomplete="off" aria-hidden="true" />', '', 1)
> s = s.replace('autocomplete="name" maxlength="100" required placeholder="Jane Smith"', 'autocomplete="name" minlength="2" maxlength="100" required placeholder="Jamie Patel"', 1)
> s = s.replace('autocomplete="email" maxlength="200" required placeholder="jane@company.com"', 'autocomplete="email" maxlength="200" required placeholder="you@yourcompany.com"', 1)
> s = s.replace('<label class="form-wide">Subject<input name="subject" type="text" maxlength="160" required placeholder="Internship opportunity" /></label>', '<label class="form-wide">Project or need<input name="subject" type="text" minlength="4" maxlength="160" required placeholder="A booking site for my studio" /></label>', 1)
> s = s.replace('<label class="form-wide">Message<textarea name="message" rows="5" maxlength="5000" required placeholder="A little about what you have in mind…"></textarea></label>', '<label class="form-wide">Tell me about it<textarea name="message" rows="5" minlength="20" maxlength="5000" required placeholder="What are you looking to build? What is the current challenge, and what would a good outcome look like?"></textarea></label>', 1)
> s = s.replace('>Send message <span>↗</span>', '>Open email draft <span>↗</span>', 1)
> s = s.replace('Your message will be sent to Vatsal’s email.', 'Your email app will open with a ready-to-send draft. Review it, then press Send.', 1)
> index_path.write_text(s, encoding='utf-8')
>
> work_path = Path('work.html')
> w = work_path.read_text(encoding='utf-8')
> w = w.replace('<nav class="story-nav" aria-label="Jump to a project"><a href="#aurapass">AuraPass</a><a href="#chemicrown">ChemiCrown</a><a href="#vixora">Vixora</a>', '<nav class="story-nav" aria-label="Jump to a project"><a href="#vixora">Vixora</a><a href="#chemicrown">ChemiCrown</a><a href="#aurapass">AuraPass</a>', 1)
> # Replace the AuraPass diagram with the supplied product screenshot.
> old = re.search(r'<article class="case-story" id="aurapass">.*?</article>', w, flags=re.S)
> assert old, 'AuraPass case story not found'
> aura = old.group(0)
> aura = re.sub(r'<div class="case-image-wrap case-aurapass">.*?</div><div class="case-copy">', '<div class="case-image-wrap case-aurapass"><img src="assets/projects/aurapass-product-720.webp" srcset="assets/projects/aurapass-product-720.webp 720w, assets/projects/aurapass-product-1280.webp 1280w" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 50vw, 700px" alt="AuraPass biometric attendance, access control, and model-routing interface" loading="lazy" decoding="async" /><small>AURAPASS · UNIFIED BIOMETRIC FLOW</small></div><div class="case-copy">', aura, count=1, flags=re.S)
> aura = aura.replace('01 / COMPUTER VISION SYSTEMS', '03 / COMPUTER VISION SYSTEMS', 1)
> w = w[:old.start()] + aura + w[old.end():]
> # Keep the detailed case-story sequence consistent with the home page: Vixora, ChemiCrown, AuraPass, Soil Signals, then the remaining projects.
> articles = re.findall(r'<article class="case-story".*?</article>', w, flags=re.S)
> assert len(articles) >= 6, f'Expected project stories, found {len(articles)}'
> by_id = {re.search(r'id="([^"]+)"', article).group(1): article for article in articles}
> order = ['vixora', 'chemicrown', 'aurapass', 'soil', 'elevara', 'bookit', 'p2p']
> assert all(key in by_id for key in order), f'Missing case story: {set(order) - set(by_id)}'
> for key, number in [('vixora','01'), ('chemicrown','02'), ('soil','04')]:
>     by_id[key] = re.sub(r'case-index">\d{2}', f'case-index">{number}', by_id[key], count=1)
> # Remove in-place and reinsert ordered stories at the first story's location.
> first = re.search(r'<article class="case-story".*?</article>', w, flags=re.S)
> assert first
> w = w[:first.start()] + '\n      '.join(by_id[key] for key in order) + w[first.end():]
> work_path.write_text(w, encoding='utf-8')
> '@ | python -;`
> - Ran `python -c "def lum(h):\n c=[int(h[i:i+2],16)/255 for i in (1,3,5)];\n c=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c];\n return .2126*c[0]+.7152*c[1]+.0722*c[2]\nb=lum('#477BFF');\nprint('contrast cobalt/ink', (b+.05)/(lum('#090B0F')+.05));\nprint('contrast cobalt/ivory', (lum('#F0EEE5')+.05)/(b+.05))"`
> - Wrote `./app.js` (+26 -21)
> - Wrote `./art-direction.css` (+13 -0)
> - Ran `@'
> from pathlib import Path
> import re
> colors = ['#d8ff9b15','#98b86a80','#79865588','#66705238','#a4b78642','#b3c390','#829267','#66764b','#5b6548','#283025']
> for name in ['styles.css','art-direction.css']:
>     s=Path(name).read_text(encoding='utf-8')
>     for color in colors:
>         for m in re.finditer(re.escape(color),s,re.I):
>             print(f'{name}:{s.count(chr(10),0,m.start())+1}: ...{s[max(0,m.start()-65):m.end()+65]}...')
> '@ | python -`
> - Ran `@'
> from pathlib import Path
> p = Path('styles.css')
> s = p.read_text(encoding='utf-8')
> for old, new in {
>     '#d8ff9b15': 'rgba(var(--accent-rgb), .08)',
>     '#98b86a80': 'rgba(var(--accent-rgb), .5)',
>     '#79865588': 'rgba(var(--accent-rgb), .53)',
>     '#66705238': 'rgba(var(--accent-rgb), .22)',
>     '#a4b78642': 'rgba(var(--accent-rgb), .26)',
>     'color:#b3c390': 'color:var(--lime)'
> }.items():
>     s = s.replace(old, new)
> p.write_text(s, encoding='utf-8')
> '@ | python -;`
> - Ran `@'
> from pathlib import Path
> import re
> for fn in ['index.html','work.html']:
>  s=Path(fn).read_text(encoding='utf-8')
>  print('\n',fn)
>  if fn=='index.html':
>   print('featured:', re.findall(r'<article class="project-card[^>]*data-project="([^"]+)',s))
>   print('more:', re.findall(r'<article class="mini-project" data-project="([^"]+)',s))
>  else:
>   print('stories:', re.findall(r'<article class="case-story" id="([^"]+)',s))
>   print('nav:', re.search(r'<nav class="story-nav".*?</nav>',s).group(0))
> '@ | python -; $f=Get-Content 'index.html'; for($i=66;$i -le 76;$i++){ "---$i---"; $f[$i-1] }`
> - Ran `@'
> from pathlib import Path
> import re
> p=Path('work.html')
> s=p.read_text(encoding='utf-8')
> pattern=r'<article class="case-story".*?</article>'
> matches=list(re.finditer(pattern,s,re.S))
> assert matches, 'case stories not found'
> by_id={}
> for m in matches:
>     key=re.search(r'id="([^"]+)"',m.group(0)).group(1)
>     by_id.setdefault(key,m.group(0))
> order=['vixora','chemicrown','aurapass','soil','elevara','bookit','p2p']
> assert all(k in by_id for k in order), set(order)-set(by_id)
> # Normalize the story numbering and preserve the AuraPass screenshot version from the first ordered set.
> for key, number in [('vixora','01'),('chemicrown','02'),('aurapass','03'),('soil','04'),('elevara','05'),('bookit','06'),('p2p','07')]:
>     by_id[key]=re.sub(r'(case-index">)\d{2}',rf'\g<1>{number}',by_id[key],count=1)
> first=matches[0].start()
> last=matches[-1].end()
> s=s[:first]+'__ORDERED_PROJECT_STORIES__'+s[last:]
> s=s.replace('__ORDERED_PROJECT_STORIES__','\n      '.join(by_id[k] for k in order),1)
> p.write_text(s,encoding='utf-8')
> print('Stories ordered:', order, '| total:', len(re.findall(pattern,s,re.S)))
> '@ | python -;`
> - Wrote `./app.js` (+2 -2)
> - Ran `rg -n -- "contact-form|form-honey|_subject|mailto|project-aurapass|mini-project\" data-project=\"soil|case-story\" id=\"aurapass" index.html; @'
> from pathlib import Path
> p=Path('index.html')
> s=p.read_text(encoding='utf-8')
> s=s.replace('<input type="hidden" name="_subject" value="Portfolio message for Vatsal Vadgama" />','',1)
> p.write_text(s,encoding='utf-8')
> '@ | python -;`
> - Ran `rg -n -- 'contact-form|form-honey|_subject|mailto:|project-aurapass|data-project="soil"' index.html; rg -n -- 'case-story|case-aurapass|story-nav' work.html; rg -o --no-filename '#c8f169[0-9a-fA-F]*|rgba\(\s*200,\s*241,\s*105,\s*[^)]*\)' styles.css art-direction.css hero-scene.js`
> - Ran `@'
> from pathlib import Path
> p=Path('index.html')
> s=p.read_text(encoding='utf-8')
> s=s.replace('OPEN TO SOFTWARE ENGINEERING INTERNSHIPS','OPEN TO PROJECTS · COLLABORATIONS · INTERNSHIPS',1)
> p.write_text(s,encoding='utf-8')
> '@ | python -; node --check app.js; node --check hero-scene.js;`
>
> </details>
>
> The project swap and email-draft flow are in place. I’ve also converted the supplied AuraPass screenshot into small responsive WebP assets; next I’m checking the actual desktop/mobile layouts, especially the stacked project cards and the updated form.
>
> <details><summary>Ran 2 commands</summary>
>
> <details><summary>Explored a file</summary>
>
> - Read `C:/Users/VATSAL/.codex/plugins/cache/openai-bundled/computer-use/26.1111.21308/skills/computer-use/SKILL.md`
>
> </details>
>
> - Ran `Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\guidance.md' -Raw; Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\confirmations.md' -Raw`
>
> - Ran `@'
> from PIL import Image
> for name in ['assets/projects/soil-analysis-640.webp','assets/projects/vixora-dashboard-720.webp','assets/projects/aurapass-product-720.webp']:
>  with Image.open(name) as im: print(name, im.size)
> '@ | python -`
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 4 commands</summary>
>
> - Ran `@('C:\Program Files\Google\Chrome\Application\chrome.exe','C:\Program Files (x86)\Google\Chrome\Application\chrome.exe','C:\Program Files\Microsoft\Edge\Application\msedge.exe') | ForEach-Object { if (Test-Path $_) { $_ } }`
> - Ran `& 'C:\Program Files\Google\Chrome\Application\chrome.exe' --headless=new --disable-gpu --no-first-run --hide-scrollbars --virtual-time-budget=4500 --window-size=1440,900 --screenshot='C:\Users\VATSAL\AppData\Local\Temp\portfolio-desktop-work.png' 'file:///E:/portfolio/index.html#work'`
> - Ran `Get-Item 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-desktop-work.png' -ErrorAction SilentlyContinue | Select-Object FullName,Length,LastWriteTime | Format-List;`
> - Ran `$chromeArgs = @('--headless=new','--disable-gpu','--no-first-run','--hide-scrollbars','--virtual-time-budget=5000','--window-size=1440,900','--user-data-dir=C:\Users\VATSAL\AppData\Local\Temp\portfolio-preview-profile','--screenshot=C:\Users\VATSAL\AppData\Local\Temp\portfolio-desktop-work.png','file:///E:/portfolio/index.html#work'); $process = Start-Process -FilePath 'C:\Program Files\Google\Chrome\Application\chrome.exe' -ArgumentList $chromeArgs -WindowStyle Hidden -Wait -PassThru; "exit=$($process.ExitCode)"; if (Test-Path 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-desktop-work.png') { Get-Item 'C:\Users\VATSAL\AppData\Local\Temp\portfolio-desktop-work.png' | Select-Object FullName,Length }`
>
> </details>
>
> The first headless-browser capture didn’t start cleanly, so I’m switching to the provided browser inspection session to review the local page at desktop and phone sizes. I’ll keep this to layout inspection and won’t submit the contact form.
>
> <details><summary>Ran 4 commands, called 7 tools</summary>
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "if (!globalThis.sky) {\n  const { sky } = await import(\"@oai/sky\");\n  globalThis.sky = sky;\n}",
>   "title": "Preparing visual inspection"
> }
> ```
>
> ```text
>
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.apps = await sky.list_apps(); nodeRepl.write(JSON.stringify(apps.map(app => ({id:app.id,name:app.name,windows:app.windows.map(w => ({id:w.id,title:w.title}))})), null, 2));",
>   "title": "Finding the local browser"
> }
> ```
>
> ```text
> [
>   {
>     "id": "Chrome",
>     "windows": [
>       {
>         "id": 393416,
>         "title": "Vatsal Vadgama — Software Engineer - Google Chrome"
>       }
>     ]
>   },
>   {
>     "id": "OpenAI.Codex_2p2nqsd0c76g0!App",
>     "windows": [
>       {
>         "id": 983804,
>         "title": "ChatGPT"
>       }
>     ]
>   },
>   {
>     "id": "Brave",
>     "windows": [
>       {
>         "id": 69188,
>         "title": "Sarthak Sharma | Product Builder & Technical Educator - Brave"
>       }
>     ]
>   },
>   {
>     "id": "Microsoft.WindowsNotepad_8wekyb3d8bbwe!App",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\VideoLAN\\VLC\\vlc.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{51325390-AE6A-68FC-A315-0950CC83A166}",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{30BD9A02-CB9A-93FD-A859-09C8803F2346}",
>     "windows": []
>   },
>   {
>     "id": "Claude_pzs8sxrjxfjjc!Claude",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Steam\\Steam.exe",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Samsung\\Samsung Magician\\SamsungMagician.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.POWERPNT.EXE.15",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\POWERPNT.EXE",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.WINWORD.EXE.15",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\WINWORD.EXE",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\MySQL\\MySQL Workbench 8.0\\MySQLWorkbench.exe",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\services.msc",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{C2A4A863-0656-6D2C-6664-92F1631676F8}",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Blackmagic Design\\DaVinci Resolve\\Resolve.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.VisualStudio.Installer",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\msinfo32.exe",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Cloudflare\\Cloudflare WARP\\Cloudflare WARP.exe",
>     "windows": []
>   },
>   {
>     "id": "com.squirrel.Discord.Discord",
>     "windows": []
>   },
>   {
>     "id": "AcrobatReader",
>     "windows": []
>   },
>   {
>     "id": "{F38BF404-1D43-42F2-9305-67DE0B28FC23}\\regedit.exe",
>     "windows": []
>   },
>   {
>     "id": "{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\\cleanmgr.exe",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\GRETECH\\GOMPlayer\\GOM.EXE",
>     "windows": []
>   },
>   {
>     "id": "AdvancedMicroDevicesInc-2.AMDRadeonSoftware_0a9344xs7nr4m!AMDRadeonsoftwareUWP",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.AutoGenerated.{C17D49BC-3948-20AC-2799-FD5933B521F5}",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.Office.MSACCESS.EXE.15",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\Microsoft Office\\Office15\\MSACCESS.EXE",
>     "windows": []
>   },
>   {
>     "id": "AdobeSystemsIncorporated.AdobePhotoshopExpress_mtcwf2zmmt10c!AddText",
>     "windows": []
>   },
>   {
>     "id": "AdobeSystemsIncorporated.AdobePhotoshopExpress_mtcwf2zmmt10c!App",
>     "windows": []
>   },
>   {
>     "id": "Google.AntigravityIDE",
>     "windows": []
>   },
>   {
>     "id": "{6D809377-6AF0-444B-8957-A3773F02200E}\\PostgreSQL\\16\\bin\\stackbuilder.exe",
>     "windows": []
>   },
>   {
>     "id": "B9ECED6F.ArmouryCrate_qmba6cd70vzyy!App",
>     "windows": []
>   },
>   {
>     "id": "googleplaygames://launch/?id=com.gameloft.android.ANMP.GloftA9HM&lid=1&pid=1",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Player\\BlackmagicRAWPlayer.exe",
>     "windows": []
>   },
>   {
>     "id": "{7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Speed Test\\BlackmagicRAWSpeedTest.exe",
>     "windows": []
>   },
>   {
>     "id": "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App",
>     "windows": []
>   },
>   {
>     "id": "microsoft.windowscommunicationsapps_8wekyb3d8bbwe!microsoft.windowslive.calendar",
>     "windows": []
>   },
>   {
>     "id": "Chrome",
>     "windows": [
>       {
>         "id": 1706550,
>         "title": "Choose Third Portfolio Color - Google Chrome"
>       }
>     ]
>   }
> ]
> ```
>
> - Ran `rg -n -- "get_window_state|screenshots|emitImage|type Screenshot" 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\api.md'`
>
> - Ran `$f=Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\api.md'; for($i=40;$i -le 65;$i++){ '{0}: {1}' -f $i,$f[$i-1] }; for($i=125;$i -le 142;$i++){ '{0}: {1}' -f $i,$f[$i-1] };`
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const matches = apps.flatMap(app => app.windows.map(window => ({app, window}))).filter(item => item.window.title === \"Vatsal Vadgama — Software Engineer - Google Chrome\");\n  if (matches.length !== 1) throw new Error(`Expected one portfolio window, found ${matches.length}`);\n  globalThis.targetWindow = await sky.get_window({id: matches[0].window.id, app: matches[0].app.id});\n  globalThis.state = await sky.get_window_state({window: targetWindow, include_screenshot: true, include_text: true});\n  globalThis.targetWindow = state.window;\n  nodeRepl.write(String(state.accessibility?.tree || state.accessibility?.document_text || \"\"));\n  if (state.screenshots?.[0]?.url) await nodeRepl.emitImage(state.screenshots[0].url);\n}",
>   "title": "Inspecting the portfolio page"
> }
> ```
>
> ````text
> Window: "Vatsal Vadgama — Software Engineer - Google Chrome", App: chrome.exe.
> 	0 window Vatsal Vadgama — Software Engineer - Google Chrome Secondary Actions: Raise
> 		1 pane (disabled)
> 		2 pane (region) Vatsal Vadgama — Software Engineer - Google Chrome - Vatsal (Your Chrome)
> 			3 pane (region)
> 				4 pane (region)
> 					5 pane (region)
> 						6 button Minimize ID: view_1
> 						7 button Restore ID: view_3
> 						8 button Close ID: view_4
> 					9 pane (region)
> 						10 pane (region)
> 							11 toolbar (tool bar) ID: view_1000
> 								12 button Back ID: view_1001
> 								13 button (disabled) Forward ID: view_1002
> 								14 button Reload ID: view_1003
> 								15 group
> 									16 button File ID: view_1011
> 									17 text field (edit) (settable, string) Address and search bar Description: Ask Google or type a URL Value: E:/portfolio/index.html#work ID: view_1012
> 									18 pane (region)
> 										19 button Bookmark this tab
> 								20 pane (region)
> 									21 button Buyhatke: Price History & Tracker, Spend Lens ID: view_1009
> 									22 button Extensions ID: view_1006
> 								23 pane (region)
> 								24 button Vatsal (Your Chrome) ID: view_1018
> 								25 button Chrome ID: view_1007
> 						26 pane (region)
> 							27 pane (region)
> 								28 pane (region)
> 								29 document Vatsal Vadgama — Software Engineer Value: file:///E:/portfolio/index.html#work ID: RootWebArea
> 									30 hyperlink (link) Skip to content Value: file:///E:/portfolio/index.html#top
> 									31 group (header)
> 										32 hyperlink (link) V. VATSAL VADGAMA Value: file:///E:/portfolio/index.html#top
> 										33 group (navigation) Main navigation ID: primary-nav
> 											34 hyperlink (link) Work Value: file:///E:/portfolio/work.html
> 											35 hyperlink (link) About Value: file:///E:/portfolio/about.html
> 											36 hyperlink (link) Journey Value: file:///E:/portfolio/about.html#journey
> 											37 hyperlink (link) Contact ↗ Value: file:///E:/portfolio/index.html#contact
> 									38 group (main) ID: top
> 										39 group (region) Vatsal Vadgama .
> 											40 text SOFTWARE ENGINEER · PRODUCT BUILDER
> 											41 text AHMEDABAD, INDIA
> 											42 text · 23°01′N 72°34′E
> 											43 text 01 / INTRODUCTION
> 											44 text Curious by default.
> 											45 text 
> 											46 text Builder by choice.
> 											47 text INTERACTIVE STUDY
> 											48 text Move your pointer
> 											49 text 
> 											50 text through the signal ↗
> 											51 text A HUMAN PERSPECTIVE ON SOFTWARE
> 											52 text (heading) Vatsal Vadgama . ID: hero-title
> 											53 text I turn complex problems into useful products—from the interface people trust to the systems that keep everything running.
> 											54 hyperlink (link) Explore my work ↓ Value: file:///E:/portfolio/index.html#work
> 											55 hyperlink (link) View résumé ↗ Value: file:///E:/portfolio/assets/Vatsal-Vadgama-Resume.pdf
> 											56 text CS UNDERGRADUATE · NIRMA UNIVERSITY
> 											57 text PRODUCTS · SYSTEMS · MACHINE LEARNING
> 											58 hyperlink (link) SCROLL TO EXPLORE ↓ Value: file:///E:/portfolio/index.html#work
> 										59 group (region) At a glance
> 											60 text A FEW SIGNALS
> 											61 text 8.34
> 											62 text CGPA · NIRMA UNIVERSITY
> 											63 text 0.89
> 											64 text R² · SOIL ANALYSIS MODEL
> 											65 text 3
> 											66 text FLAGSHIP BUILDS
> 											67 text ∞
> 											68 text THINGS LEFT TO LEARN
> 										69 text 02 / SELECTED WORK
> 										70 text BUILT, TESTED, LEARNED FROM
> 										71 text (heading) Ideas are easy. Shipping is the work.
> 										72 text A selection of products and experiments where I’ve explored real-time systems, enterprise workflows, and data-driven prediction.
> 										73 group (article)
> 											74 image (graphic) Vixora video streaming platform home feed
> 											75 text PRODUCT INTERFACE
> 											76 text 01 / 03
> 											77 text 01 — PRODUCT ENGINEERING
> 											78 text FULL STACK · REAL TIME
> 											79 text (heading) Vixora↗
> 											80 text A video streaming platform designed around the full watch journey: upload, organize, discover, and keep up with what matters.
> 											81 text Node.js
> 											82 text PostgreSQL
> 											83 text Redis
> 											84 text Socket.IO
> 											85 text BullMQ
> 											86 button View project notes ↗
> 										87 group (article)
> 											88 image (graphic) ChemiCrown CDMS finance and accounting dashboard
> 											89 text INTERNSHIP BUILD
> 											90 text 02 / 03
> 											91 text 02 — FULL STACK INTERNSHIP
> 											92 text B2B COMMERCE · ERP
> 											93 text (heading) ChemiCrown CDMS↗
> 											94 text A B2B commerce and ERP platform for industrial chemical distribution, connecting catalog, inventory compliance, sales orders, payments, and employee administration.
> 											95 text React / Vite
> 											96 text Node.js
> 											97 text PostgreSQL
> 											98 text Prisma
> 											99 text Supabase
> 											100 button View project notes ↗
> 										101 group (article)
> 											102 image (graphic) Soil spectrometer and machine learning analysis dashboard
> 											103 text HACKNUTHON 6.0
> 											104 text 03 / 03
> 											105 text 03 — APPLIED MACHINE LEARNING
> 											106 text HACKNUTHON 6.0 FINALIST
> 											107 text (heading) Soil Signals↗
> 											108 text A spectrometer-data pipeline that extracts useful soil properties, developed with a team for the Reve digital farming track. Model comparison reached an R² score of 0.89.
> 											109 text Python
> 											110 text Scikit-learn
> 											111 text CatBoost
> 											112 text LightGBM
> 											113 text TensorFlow
> 											114 button View project notes ↗
> 										115 text MORE THINGS I’VE BUILT
> 										116 text A FEW OTHER DIRECTIONS
> 										117 group (article)
> 											118 text EDGE AUTH / 284 ms
> 											119 text ●●●
> 											120 text Identity verified
> 											121 text BIOMETRICS · AUDIT · ACCESS
> 											122 text 01 / COMPUTER VISION SYSTEMS
> 											123 text (heading) AuraPass View AuraPass project notes
> 												124 button View AuraPass project notes
> 											125 text On-premise facial attendance and access with liveness checks, edge verification, multi-tenant roles, and tamper-evident audit logging.
> 											126 text React
> 											127 text Flask
> 											128 text PostgreSQL
> 											129 text Docker
> 										130 group (article)
> 											131 image (graphic) Elevara AI career tools interface
> 											132 text 02 / AI CAREER TOOLS
> 											133 text (heading) Elevara View Elevara project notes
> 												134 button View Elevara project notes
> 											135 text A career toolkit concept combining resume analysis, job-tailoring, cover letters, mock interviews, and learning roadmaps.
> 											136 text React
> 											137 text Node.js
> 											138 text PostgreSQL
> 											139 text Gemini API
> 										140 group (article)
> 											141 image (graphic) Bookit service booking product interface
> 											142 text 03 / SERVICE MARKETPLACE
> 											143 text (heading) Bookit View Bookit project notes
> 												144 button View Bookit project notes
> 											145 text A service booking product exploring provider discovery, appointment scheduling, role-based access, and payments.
> 											146 text React
> 											147 text Express
> 											148 text PostgreSQL
> 											149 text Prisma
> 										150 group (article)
> 											151 text PEER / PEER
> 											152 text 01 —— 02
> 											153 text Encrypted channel
> 											154 text C++ · MEMORY · FILE SECURITY
> 											155 text 04 / SYSTEMS PROGRAMMING
> 											156 text (heading) Secure P2P Network View Secure P2P Network project notes
> 												157 button View Secure P2P Network project notes
> 											158 text A C++ peer-to-peer messaging experiment with custom memory management, user authentication, secure file handling, and encrypted message storage.
> 											159 text C++
> 											160 text Data Structures
> 											161 text Cryptography
> 										162 hyperlink (link) Explore all project stories ↗ Value: file:///E:/portfolio/work.html
> 										163 text 01 / THE PERSON BEHIND THE WORK
> 										164 text CURIOSITY, MADE PRACTICAL
> 										165 text (heading) Curious by default. Builder by choice.
> 										166 text I’m pursuing a B.Tech in Computer Science & Engineering at the Institute of Technology, Nirma University. I enjoy moving between product thinking and implementation: understanding the problem, shaping a clean experience, then building the systems underneath it.
> 										167 text My work spans full-stack products, backend architecture, real-time applications, and applied machine learning. I’m currently looking for software engineering internship opportunities where I can learn fast and contribute to meaningful work.
> 										168 hyperlink (link) Read my resume ↗ Value: file:///E:/portfolio/assets/Vatsal-Vadgama-Resume.pdf
> 										169 group (article)
> 											170 text 01
> 											171 text (heading) Understand first
> 											172 text Start with the people, constraints, and edge cases behind the request.
> 										173 group (article)
> 											174 text 02
> 											175 text (heading) Build the whole thing
> 											176 text Care about data, APIs, interfaces, and the handoffs between them.
> 										177 group (article)
> 											178 text 03
> 											179 text (heading) Make it dependable
> 											180 text Think about performance, security, and what happens when things fail.
> 										181 text 03 / HOW I THINK & BUILD
> 										182 text FROM THE FIRST QUESTION TO THE LAST EDGE CASE
> 										183 text (heading) Good software connects the dots.
> 										184 text I like understanding how each layer affects the next. A thoughtful interface depends on good APIs. Good APIs depend on a model of the problem that makes sense.
> 										185 group (article)
> 											186 text 01
> 											187 text ⌖
> 											188 text (heading) Frame the problem
> 											189 text Clarify the user, core flow, constraints, and what success should look like.
> 											190 text PRODUCT THINKING · REQUIREMENTS
> 										191 text ⟶
> 										192 group (article)
> 											193 text 02
> 											194 text ⌘
> 											195 text (heading) Design the system
> 											196 text Choose the data model, API boundaries, and tools that fit the real need.
> 											197 text ARCHITECTURE · DATA · APIS
> 										198 text ⟶
> 										199 group (article)
> 											200 text 03
> 											201 text ↗
> 											202 text (heading) Build and refine
> 											203 text Deliver the experience, handle failure paths, then improve with feedback.
> 											204 text IMPLEMENTATION · ITERATION
> 										205 text TOOLS I REACH FOR
> 										206 text Comfortable across the stack; always learning the next useful thing.
> 										207 text LANGUAGES
> 										208 text C++
> 										209 text JavaScript
> 										210 text Python
> 										211 text BACKEND
> 										212 text Node.js
> 										213 text Express
> 										214 text REST APIs
> 										215 text Prisma
> 										216 text FRONTEND
> 										217 text React
> 										218 text Vite
> 										219 text Tailwind CSS
> 										220 text DATA & SYSTEMS
> 										221 text PostgreSQL
> 										222 text MongoDB
> 										223 text Redis
> 										224 text Docker
> 										225 text Kubernetes
> 										226 text 04 / THE WORK, MULTIPLIED
> 										227 text PROGRESS YOU CAN POINT TO
> 										228 text (heading) Progress is earned in reps.
> 										229 text Through coursework, independent builds, hackathons, and problem solving, I’m building a broad foundation one hard problem at a time.
> 										230 group (article)
> 											231 text ACADEMIC FOUNDATION
> 											232 text 8.34
> 											233 text /10
> 											234 text CGPA in Computer Science & Engineering at Nirma University.
> 											235 text B.TECH · 2023—2027
> 										236 group (article)
> 											237 text MODEL PERFORMANCE
> 											238 text 0.89
> 											239 text R²
> 											240 text Achieved by the soil property prediction model in our HackNUthon finalist project.
> 											241 text REVE DIGITAL FARMING TRACK
> 										242 group (article)
> 											243 text PROBLEM SOLVING
> 											244 text 1,645
> 											245 text LeetCode rating, alongside a Codeforces rating of 1,155.
> 											246 text LEETCODE · CODEFORCES
> 										247 text 05 / THE JOURNEY SO FAR
> 										248 text LEARNING BY BUILDING
> 										249 text (heading) Grounded in the fundamentals.
> 										250 group (article)
> 											251 text 2023 — 2027
> 											252 text (heading) B.Tech, Computer Science & Engineering
> 											253 text Institute of Technology, Nirma University · Ahmedabad
> 											254 text CGPA 8.34
> 											255 text IN PROGRESS
> 										256 group (article)
> 											257 text MAY — JUN 2026
> 											258 text (heading) Full Stack Developer Intern
> 											259 text ChemiCrown Trading Co. · Built a B2B commerce and ERP platform for industrial chemical distribution.
> 											260 text CATALOGS · INVENTORY · ORDERS · PAYMENTS
> 											261 text INTERNSHIP
> 										262 group (article)
> 											263 text MAR 2025
> 											264 text (heading) HackNUthon 6.0 finalist
> 											265 text Worked with a team on soil spectrometer data processing and analysis for the Reve digital farming track.
> 											266 text TOP 10 FINALIST · TEAM PROJECT
> 											267 text MILESTONE
> 										268 group (article)
> 											269 text FEB — APR 2025
> 											270 text (heading) Hackathon builder
> 											271 text Continued exploring collaborative product work at MINeD and Build with India hackathons.
> 											272 text IDEATE · BUILD · PRESENT
> 											273 text MILESTONE
> 										274 text BEFORE UNIVERSITY
> 										275 text Mahatma Gandhi Educational Campus, Rajkot · 12th GSEB · 96 percentile · 2023
> 										276 text 06 / WHERE I KEEP LEARNING
> 										277 text (heading) Different problems. Same curiosity.
> 										278 text Browse the code, follow the problem solving, or reach out directly.
> 										279 hyperlink (link) 01 GitHub PROJECTS & CODE ↗ Value: https://github.com/vatsal3030
> 										280 hyperlink (link) 02 LinkedIn PROFESSIONAL PROFILE ↗ Value: https://www.linkedin.com/in/vatsal-vadgama-31b9a028b/
> 										281 hyperlink (link) 03 LeetCode RATING · 1,645 ↗ Value: https://leetcode.com/u/VATSAL_30/
> 										282 hyperlink (link) 04 Codeforces RATING · 1,155 ↗ Value: https://codeforces.com/profile/23bce359
> 										283 text 07 / THE NEXT CHAPTER
> 										284 text OPEN TO SOFTWARE ENGINEERING INTERNSHIPS
> 										285 text (heading) Let’s build something useful.
> 										286 text Interested in internship opportunities, thoughtful products, and teams that care about how things work. If you think there’s a fit, send me a note.
> 										287 hyperlink (link) vatsalvadgama05@gmail.com ↗ Value: mailto:vatsalvadgama05@gmail.com
> 										288 text AHMEDABAD, GUJARAT, INDIA
> 										289 text Your name
> 										290 text field (edit) (settable, string) Your name Description: Jane Smith
> 										291 text Your email
> 										292 text field (edit) (settable, string) Your email Description: jane@company.com
> 										293 text Subject
> 										294 text field (edit) (settable, string) Subject Description: Internship opportunity
> 										295 text Message
> 										296 text field (edit) (settable, string) Message Description: A little about what you have in mind…
> 										297 button Send message ↗
> 										298 status bar (status) ID: contact-status
> 											299 text Your message will be sent to Vatsal’s email.
> 									300 group (footer)
> 										301 hyperlink (link) V. VATSAL VADGAMA Value: file:///E:/portfolio/index.html#top
> 										302 text COMPUTER SCIENCE · PRODUCT ENGINEERING · INDIA
> 										303 text ©
> 										304 text 2026
> 										305 text BUILT WITH INTENT.
> 										306 hyperlink (link) BACK TO TOP ↑ Value: file:///E:/portfolio/index.html#top
> 							307 pane (region)
> 						308 pane (region)
> 							309 pane (region)
> 								310 button Tab search
> 							311 pane (region) ID: view_21
> 								312 tab
> 									313 tab item (selectable) Table Editor | vatsalvadgama05@gmail.com's Project | FairShare | Supabase ID: view_20
> 									314 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access ID: view_20
> 									315 tab item (selectable) Gemini In Antigravity Comparison ID: view_20
> 									316 tab item (selectable) Owino FairShare | Smart Expense Splitting & Debt Minimization ID: view_20
> 									317 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access ID: view_20
> 									318 tab item (selectable) localhost - Network error ID: view_20
> 									319 tab item (selectable) Liquid glassmorphism UI redesign prompt - Claude ID: view_20
> 									320 tab item (selectable) Redesign UI UX Screens ID: view_20
> 									321 tab item (selectable) PrashantTarbundiya/RMS ID: view_20
> 									322 tab item (selectable) AuraPass Enterprise | On-Premise Facial Recognition Attendance & Access - Memory usage - 583 MB ID: view_20
> 									323 tab item (selectable) Vatsal Vadgama — Software Engineer - Memory usage - 81.8 MB ID: view_20
> 										324 button Close
> 									325 tab item (selectable) Sarthak Sharma | Product Builder & Technical Educator - Memory usage - 79.6 MB ID: view_20
> 									326 tab item (selectable) morluto/rea: Reverse engineer anything with agents, from app behavior down to native binaries. ID: view_20
> 									327 tab item (selectable) REA: Reverse Engineering for Your Coding Agent - Memory usage - 80.9 MB ID: view_20
> 									328 tab item (selectable) Request to Trace Old Physical Unit Certificate – GMIS 1992–II – Maturity / Unclaimed Proceeds Status - vatsalvadgama04@gmail.com - Gmail - Memory usage - 328 MB ID: view_20
> 								329 pane (region)
> 							330 button New Tab
> 							331 pane (region)
> 							332 pane (region)
> 								333 button Open Gemini in Chrome
> 								334 pane (region)
> 						335 pane (region)
>
> Document text: ```
> ￼
> ```
> ````
>
> Image output: image/jpeg
>
> Image output: image/jpeg
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const observation = globalThis.state;\n  if (observation == null) throw new Error(\"No current observation; reobserve before activation\");\n  globalThis.state = null;\n  try {\n    await sky.activate_window({window: observation.window});\n    globalThis.state = await sky.get_window_state({window: observation.window, include_screenshot: true, include_text: true});\n    globalThis.targetWindow = state.window;\n  } catch (error) {\n    throw new Error(\"Could not activate and refresh the selected portfolio window\", {cause:error});\n  }\n  nodeRepl.write(String(state.accessibility?.tree || state.accessibility?.document_text || \"\"));\n  if (state.screenshots?.length) {\n    const top = state.screenshots.reduce((a,b) => a.zIndex >= b.zIndex ? a : b);\n    nodeRepl.write(`\\nVisible screenshot: ${top.width}x${top.height}, z-index ${top.zIndex}`);\n    await nodeRepl.emitImage(top.url);\n  }\n}",
>   "title": "Refreshing the selected browser"
> }
> ```
>
> Error: Could not activate and refresh the selected portfolio window
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "globalThis.apps = await sky.list_apps(); nodeRepl.write(JSON.stringify(apps.flatMap(app => app.windows.map(window => ({app:app.id,id:window.id,title:window.title}))).filter(item => /Vatsal Vadgama|Chrome/.test(item.title)), null, 2));",
>   "title": "Refreshing the browser selection"
> }
> ```
>
> ```text
> [
>   {
>     "app": "Chrome",
>     "id": 393416,
>     "title": "Vatsal Vadgama — Software Engineer - Google Chrome"
>   },
>   {
>     "app": "Chrome",
>     "id": 1706550,
>     "title": "Choose Third Portfolio Color - Google Chrome"
>   }
> ]
> ```
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const matches = apps.flatMap(app => app.windows.map(window => ({app, window}))).filter(item => item.window.title === \"Vatsal Vadgama — Software Engineer - Google Chrome\");\n  if (matches.length !== 1) throw new Error(`Expected one portfolio window, found ${matches.length}`);\n  globalThis.targetWindow = await sky.get_window({id: matches[0].window.id, app: matches[0].app.id});\n  globalThis.state = await sky.get_window_state({window: targetWindow, include_screenshot: true, include_text: true});\n  globalThis.targetWindow = state.window;\n  nodeRepl.write(`Window: ${state.window.title}; screenshots: ${state.screenshots?.length || 0}\\n` + String(state.accessibility?.tree || \"\").slice(0,2500));\n  if (state.screenshots?.length) {\n    const top = state.screenshots.reduce((a,b) => a.zIndex >= b.zIndex ? a : b);\n    nodeRepl.write(`\\nScreenshot: ${top.width}x${top.height}, z-index ${top.zIndex}`);\n    await nodeRepl.emitImage(top.url);\n  }\n}",
>   "title": "Rechecking the local page"
> }
> ```
>
> ```text
> Window: Vatsal Vadgama — Software Engineer - Google Chrome; screenshots: 2
> Window: "Vatsal Vadgama — Software Engineer - Google Chrome", App: chrome.exe.
> 	0 window Vatsal Vadgama — Software Engineer - Google Chrome Secondary Actions: Raise
> 		1 pane (disabled)
> 		2 pane (region) Vatsal Vadgama — Software Engineer - Google Chrome - Vatsal (Your Chrome)
> 			3 pane (region)
> 				4 pane (region)
> 					5 pane (region)
> 						6 button Minimize ID: view_1
> 						7 button Restore ID: view_3
> 						8 button Close ID: view_4
> 					9 pane (region)
> 						10 pane (region)
> 							11 toolbar (tool bar) ID: view_1000
> 								12 button Back ID: view_1001
> 								13 button (disabled) Forward ID: view_1002
> 								14 button Reload ID: view_1003
> 								15 group
> 									16 button File ID: view_1011
> 									17 text field (edit) (settable, string) Address and search bar Description: Ask Google or type a URL Value: E:/portfolio/index.html#work ID: view_1012
> 									18 pane (region)
> 										19 button Bookmark this tab
> 								20 pane (region)
> 									21 button Buyhatke: Price History & Tracker, Spend Lens ID: view_1009
> 									22 button Extensions ID: view_1006
> 								23 pane (region)
> 								24 button Vatsal (Your Chrome) ID: view_1018
> 								25 button Chrome ID: view_1007
> 						26 pane (region)
> 							27 pane (region)
> 								28 pane (region)
> 								336 document Vatsal Vadgama — Software Engineer Value: file:///E:/portfolio/index.html#work ID: RootWebArea
> 									337 hyperlink (link) Skip to content Value: file:///E:/portfolio/index.html#top
> 									338 group (header)
> 										339 hyperlink (link) V. VATSAL VADGAMA Value: file:///E:/portfolio/index.html#top
> 										340 group (navigation) Main navigation ID: primary-nav
> 											341 hyperlink (link) Work Value: file:///E:/portfolio/work.html
> 											342 hyperlink (link) About Value: file:///E:/portfolio/about.html
> 											343 hyperlink (link) Journey Value: file:///E:/portfolio/about.html#journey
> 											344 hyperlink (link) Contact ↗ Value: file:///E:/portfolio/index.html#contact
> 									345 group (main) ID: top
> 										346 group (region) Vatsal Vadgama .
> 											347 text SOFTWARE ENGINEER · PRODUCT BUILDER
> 											612 text AHMEDABAD, INDIA
> 											613 text · 23°01′N 72°34′E
> 											350 text 01 / INTRODUCTION
> 											351 text Curious by default.
> 											352 text 
> 											353 text Builder by choice.
> 											354 text INTERACTIVE STUDY
> 											355 text Move your pointer
> 											356 text 
> 											357 text through the signal ↗
> 											614 text A HUMAN
> Screenshot: 202x23, z-index 1
> ```
>
> Image output: image/jpeg
>
> Image output: image/jpeg
>
> Image output: image/jpeg
>
> - Ran `rg -n -- "press_key|type_text|Keyboard" 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\api.md' | Select-Object -First 8`
>
> - Ran `$f=Get-Content 'C:\Users\VATSAL\.codex\plugins\cache\openai-bundled\computer-use\26.1111.21308\docs\api.md'; for($i=76;$i -le 93;$i++){ '{0}: {1}' -f $i,$f[$i-1] };`
>
> MCP tool call
>
> node_repl.js
>
> ```json
> {
>   "code": "{\n  const observation = globalThis.state;\n  if (observation == null) throw new Error(\"No fresh window state; stop before retrying activation\");\n  globalThis.state = null;\n  try {\n    await sky.activate_window({window: observation.window});\n    globalThis.state = await sky.get_window_state({window: observation.window, include_screenshot: true, include_text: true});\n    globalThis.targetWindow = state.window;\n    nodeRepl.write(`Activated ${state.window.title}; ${state.screenshots?.length || 0} screenshots.\\n` + String(state.accessibility?.tree || \"\").slice(0,600));\n    if (state.screenshots?.length) await nodeRepl.emitImage(state.screenshots.reduce((a,b)=>a.zIndex>=b.zIndex?a:b).url);\n  } catch (error) {\n    throw new Error(\"Activation failed again after refreshing the browser selection: \" + String(error));\n  }\n}",
>   "title": "Activating the local browser"
> }
> ```
>
> Error: Activation failed again after refreshing the browser selection: Error: user input was detected in this window; call get_window_state before continuing
>
> </details>
>
> Viewed an image
>
> <details><summary>Ran 3 commands</summary>
>
> - Ran `@'
> from pathlib import Path
> p=Path('index.html')
> s=p.read_text(encoding='utf-8')
> old='A selection of products and experiments where I’ve explored real-time systems, enterprise workflows, and data-driven prediction.'
> new='A selection of products where I’ve explored real-time platforms, enterprise workflows, and edge computer vision.'
> assert old in s
> p.write_text(s.replace(old,new,1),encoding='utf-8')
> '@ | python -; @'
> from pathlib import Path
> import re
> for fn in ['index.html','work.html']:
>  s=Path(fn).read_text(encoding='utf-8')
>  print('\n'+fn)
>  print('featured:', re.findall(r'<article class="project-card[^>]*data-project="([^"]+)',s)) if fn=='index.html' else 'stories: '+str([(m.group(1),m.group(2)) for m in re.finditer(r'<article class="case-story" id="([^"]+)".*?<span class="case-index">([0-9]{2})',s,re.S)])
>  if fn=='index.html':
>   print('more:', re.findall(r'<article class="mini-project" data-project="([^"]+)',s))
>   form=re.search(r'<form class="contact-form".*?</form>',s,re.S).group(0)
>   print('form placeholders:', re.findall(r'placeholder="([^"]+)"',form))
>   print('contact form action:', re.search(r'<form class="contact-form"[^>]*',s).group(0))
> '@ | python -; node --check app.js; node --check hero-scene.js;`
> - Ran `@'
> from pathlib import Path
> import re
> s=Path('work.html').read_text(encoding='utf-8')
> print('stories:', [(m.group(1),m.group(2)) for m in re.finditer(r'<article class="case-story" id="([^"]+)".*?<span class="case-index">([0-9]{2})',s,re.S)])
> print('story count:', len(re.findall(r'<article class="case-story"',s)))
> '@ | python -`
> - Ran `Get-ChildItem 'C:\Users\VATSAL\AppData\Local\Temp\codex-lighthouse-cache' -Recurse -File -ErrorAction SilentlyContinue | Select-Object -First 12 FullName,Length | Format-Table -AutoSize; Get-ChildItem 'C:\Users\VATSAL\AppData\Local\Temp' -Filter '*lighthouse*.js' -ErrorAction SilentlyContinue | Select-Object FullName,Length`
>
> </details>
>
> as i said previuslly i not like  that color change rollback to orginal .
>
> Understood. I’m restoring the original lime palette now and keeping the project swap, stacked scroll cards, mobile adjustments, and email-draft form.
>
> <details><summary>Edited a file</summary>
>
> - Wrote `./art-direction.css` (+4 -4)
> - Wrote `./art-direction.css` (+1 -0)
>
> </details>
>
> System error
>
> You’ve hit your usage limit. Upgrade to Plus to continue using Codex (https://chatgpt.com/explore/plus), or try again at Dec 7th, 2026 5:10 PM.
</details>
