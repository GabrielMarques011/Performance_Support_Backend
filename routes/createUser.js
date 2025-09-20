import express from 'express';
import { supabase } from '../supabaseAdmin.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password, name, role, team, type, startDate } = req.body;

  try {
    // Cria usuário no Supabase Auth
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });


    if (authError) throw authError;

    // Salva info no banco (tabela 'users')
    const { error: dbError } = await supabase.from('users').insert([
      {
        id: authUser.user.id,
        name,
        email,
        role,
        team,
        type,
        start_date: startDate,
      },
    ]);

    if (dbError) throw dbError;

    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);

    const errorMessage = error?.message || "Erro desconhecido ao criar usuário.";
    res.status(500).json({ error: errorMessage });
  }

});

export default router;
