<script>
const epgData = {
  "cartoon": [
    {
      "start": "00:00",
      "end": "23:59",
      "title": "Programa\u00e7\u00e3o N\u00e3o Dispon\u00edvel",
      "desc": "Aguardando atualiza\u00e7\u00e3o da grade de programa\u00e7\u00e3o."
    }
  ],
  "disckds": [
    {
      "start": "00:00",
      "end": "23:59",
      "title": "Programa\u00e7\u00e3o N\u00e3o Dispon\u00edvel",
      "desc": "Aguardando atualiza\u00e7\u00e3o da grade de programa\u00e7\u00e3o."
    }
  ],
  "disneychan": [
    {
      "start": "00:00",
      "end": "23:59",
      "title": "Programa\u00e7\u00e3o N\u00e3o Dispon\u00edvel",
      "desc": "Aguardando atualiza\u00e7\u00e3o da grade de programa\u00e7\u00e3o."
    }
  ],
  "gloob": [
    {
      "start": "00:00",
      "end": "23:59",
      "title": "Programa\u00e7\u00e3o N\u00e3o Dispon\u00edvel",
      "desc": "Aguardando atualiza\u00e7\u00e3o da grade de programa\u00e7\u00e3o."
    }
  ],
  "nickjr": [
    {
      "start": "00:00",
      "end": "23:59",
      "title": "Programa\u00e7\u00e3o N\u00e3o Dispon\u00edvel",
      "desc": "Aguardando atualiza\u00e7\u00e3o da grade de programa\u00e7\u00e3o."
    }
  ],
  "nickelodeon": [
    {
      "start": "00:00",
      "end": "23:59",
      "title": "Programa\u00e7\u00e3o N\u00e3o Dispon\u00edvel",
      "desc": "Aguardando atualiza\u00e7\u00e3o da grade de programa\u00e7\u00e3o."
    }
  ]
};

function updateEPGBlock(channel, list) {
  const now = new Date();
  const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  for (const item of list) {
    if (currentTime >= item.start && currentTime < item.end) {
      const [sh, sm] = item.start.split(':'), [eh, em] = item.end.split(':');
      const startMin = parseInt(sh) * 60 + parseInt(sm);
      const endMin = parseInt(eh) * 60 + parseInt(em);
      const nowMin = now.getHours() * 60 + now.getMinutes();
      const progress = ((nowMin - startMin) / (endMin - startMin)) * 100;

      document.getElementById("epg-hora-" + channel).textContent = item.start;
      document.getElementById("epg-titulo-" + channel).textContent = item.title;
      document.getElementById("epg-desc-" + channel).textContent = item.desc;
      document.getElementById("epg-progress-" + channel).style.width = progress + "%";
    }
  }
}

function updateAllEPG() {
  for (const channel in epgData) {
    updateEPGBlock(channel, epgData[channel]);
  }
}

updateAllEPG();
setInterval(updateAllEPG, 60000);
</script>
