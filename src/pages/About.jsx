import React from 'react'
import { useI18n } from '../i18n'

export default function About(){
  const { t } = useI18n()
  return (
    <section className="container">
      <h1>{t('about')} ViaRList</h1>
<h2>#ENG 🇺🇸 🇬🇧</h2>
<p>ViaRList is a list of VTubers that is less bureaucratic than the others, ViaRList makes it easier to become part of the list. The data is updated manually, there are no automations.
You can review the code of this project, in the repository corresponding to ViaRList.</p>
<p>This is a non-profit project, or data collection for sale. The data corresponds to your VTuber character, not personal, it is a support for you and nothing more. The purpose is support between content creators.</p>

<h2>#ESP 🇲🇽 🇪🇸</h2>
<p>ViaRList es una lista de VTubers menos burocrática que las demás, ViaRList hace que sea más fácil formar parte de la lista. Los datos se actualizan manualmente, no hay automatizaciones.
puedes revisar el código de este proyecto, en el repositorio corespondiente a ViaRList.</p>
<p>Este es un proyecto sin ánimos de lucro, o de recolección de datos para su venta. Los datos son correspondientes a tu personaje VTuber, no personales, es un apoyo para ti y nada más. La finalidad es el apoyo entre creadores de contenido.</p>

<h2>#JAP 🇯🇵 🇯🇵</h2>
<p>ViaRList は他の VTuber よりも官僚的ではない VTuber のリストであり、ViaRList を使用するとリストに参加しやすくなります。データは手動で更新され、自動化はありません。
このプロジェクトのコードは、ViaRList に対応するリポジトリで確認できます。</p>
<p>これは非営利プロジェクト、または販売のためのデータ収集です。データはあなたの VTuber キャラクターに対応するものであり、個人的なものではなく、あなたをサポートするものであり、それ以上のものではありません。コンテンツクリエイター間のサポートを目的としています。</p>
      
      <h2>{t('how_to_contribute')}</h2>
      <ol>
        <li>{t('how_to_contribute_steps')}</li>
        <li>Or if you prefer, contact the maintainer(ViaRCreator on X/Twitter).</li>
      </ol>
    </section>
  )
}
