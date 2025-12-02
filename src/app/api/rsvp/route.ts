import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      nom,
      email,
      presenceConfirmee,
      accompagne,
      nomAccompagnant,
      enfants,
      agesEnfants,
      restrictionsAlimentaires,
      chansonPreferee,
      questionsCommentaires
    } = body;

    // Build email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
            .section { margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px; }
            .label { font-weight: bold; color: #2c3e50; }
            .value { margin-left: 10px; }
            .list-item { margin: 5px 0; padding-left: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>📧 Nouvelle Réponse RSVP</h1>

            <div class="section">
              <p><span class="label">Nom et Prénom:</span><span class="value">${nom}</span></p>
              <p><span class="label">Email:</span><span class="value">${email}</span></p>
            </div>

            <div class="section">
              <p><span class="label">Présence confirmée:</span><span class="value">${presenceConfirmee ? '✅ Oui' : '❌ Non'}</span></p>
              <p><span class="label">Accompagné(e):</span><span class="value">${accompagne ? '✅ Oui' : '❌ Non'}</span></p>
              ${accompagne && nomAccompagnant ? `<p><span class="label">Nom de l'accompagnant:</span><span class="value">${nomAccompagnant}</span></p>` : ''}
            </div>

            ${enfants && enfants.length > 0 ? `
              <div class="section">
                <p class="label">Enfants:</p>
                ${enfants.map((enfant: string) => `<p class="list-item">• ${enfant}</p>`).join('')}
                ${agesEnfants ? `<p><span class="label">Âges:</span><span class="value">${agesEnfants}</span></p>` : ''}
              </div>
            ` : ''}

            ${restrictionsAlimentaires ? `
              <div class="section">
                <p class="label">Restrictions alimentaires:</p>
                <p class="value">${restrictionsAlimentaires}</p>
              </div>
            ` : ''}

            ${chansonPreferee ? `
              <div class="section">
                <p><span class="label">🎵 Chanson préférée pour le DJ:</span><span class="value">${chansonPreferee}</span></p>
              </div>
            ` : ''}

            ${questionsCommentaires ? `
              <div class="section">
                <p class="label">Questions / Commentaires:</p>
                <p class="value">${questionsCommentaires}</p>
              </div>
            ` : ''}
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `Nouvelle réponse RSVP de ${nom}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
