var signo = prompt ('¿Cul es tu signo?')

//console.log (signo)

switch (signo) {
  case 'acuario':
   console.log ('Aries - del 21.03 al 20.04: Continuarás buscando con afán la estabilidad en el amor y el dinero, pero por ahora esta virtud no está clara para tu signo.')
  break

  case 'tauro':
    console.log ('Tauro - del 21.04 al 21.05: Meditarás sobre la posibilidad de integrarte a clubes, asociaciones literarias, deportivas o a la práctica de algún hobby.')
  break

  case 'geminis':
  case 'géminis':
    console.log ('Geminis - del 22.05 al 21.06: No dejes que las noticias que recibas sobre un amigo te depriman. Lo mejor que puedes hacer por esa persona es estar contento.')
  break

  case 'cancer':
  case 'cáncer':
    console.log ('Cancer - del 22.06 al 23.07: Descansarás en compañía de tu pareja en un lugar retirado y tranquilo, tu cuerpo y tu mente te lo agradecerán.')
  break

  case 'leo':
    console.log ('Leo - del 24.07 al 23.08: Tendrás la oportunidad de destacarte en varios aspectos por las grandes aptitudes que tienes. Déjalas salir y lloverán propuestas.')
  break

  case 'virgo':
    console.log ('Virgo - del 24.08 al 23.09: Deja que transcurran un par de días e intenta ordenar más tu forma de vivir. Verás cómo desaparecerán esos incipientes malestares.')
  break

  case 'libra':
    console.log ('Libra - del 24.09 al 23.10: Has perdido tu confianza en los instintos. Intenta recordar cómo escuchar a tu yo interior y ten cuidado con las discusiones en casa.')
  break

  case 'escorpio':
    console.log ('Escorpio - del 24.10 al 22.11: Explorarás horizontes económicos y laborales totalmente nuevos para ti. No dejes que la melancolía y la inseguridad de amedrenten.')
  break

  case 'sagitario':
    console.log ('Sagitario - del 23.11 al 22.12: Tu actitud de liderazgo destacará hoy. Tu entorno comprenderá que eres el que manda y te impondrás por tus condiciones personales y profesionales.')
  break

  case 'capricornio':
    console.log ('Capricornio . del 23.12 al 20.01: Cuida tus pasos, hoy alguien conocido tratará de embaucarte y te dejará perplejo o comprometido.')
  break

  case 'acuario':
    console.log ('Acuario - del 21.0 al 19.02: La acción del planeta Neptuno proporcionará acertadas terapias que conseguirán el alejamiento de temores y la superación de traumas.')
  break

  case 'piscis':
    console.log ('Piscis - del 20.02 al 20.03: Tendrás un enfoque dinámico de la vida, tu carisma te llevará a crecer en tu profesión y a mejorar en las actividades sociales.')
  break

  default:
    console.log ('Error en el nombre')
  break
}
