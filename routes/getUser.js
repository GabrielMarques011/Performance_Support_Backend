import express from 'express';
import { supabase } from '../supabaseAdmin.js';

const router = express.Router();

// GET /users
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('start_date', { ascending: true });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: error.message || 'Erro desconhecido' });
  }
});

export default router;
