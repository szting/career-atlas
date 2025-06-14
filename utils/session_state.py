import streamlit as st
from typing import Dict, List, Any

def init_session_state():
    """Initialize all session state variables"""
    
    # Game state
    if 'current_step' not in st.session_state:
        st.session_state.current_step = 'persona'
    
    if 'selected_persona' not in st.session_state:
        st.session_state.selected_persona = None
    
    if 'game_progress' not in st.session_state:
        st.session_state.game_progress = 0
    
    if 'show_admin' not in st.session_state:
        st.session_state.show_admin = False
    
    # User profile
    if 'user_profile' not in st.session_state:
        st.session_state.user_profile = {
            'name': '',
            'riasec_scores': {
                'realistic': 0,
                'investigative': 0,
                'artistic': 0,
                'social': 0,
                'enterprising': 0,
                'conventional': 0
            },
            'skills_confidence': {},
            'work_values': [],
            'completed_assessments': []
        }
    
    # Assessment data
    if 'riasec_responses' not in st.session_state:
        st.session_state.riasec_responses = {}
    
    if 'recommended_careers' not in st.session_state:
        st.session_state.recommended_careers = []
    
    if 'coaching_questions' not in st.session_state:
        st.session_state.coaching_questions = []
    
    if 'reflection_questions' not in st.session_state:
        st.session_state.reflection_questions = []
    
    # Admin data
    if 'uploaded_data' not in st.session_state:
        st.session_state.uploaded_data = {
            'employees': None,
            'assessments': None,
            'careers': None
        }
    
    if 'api_keys' not in st.session_state:
        st.session_state.api_keys = {
            'openai': os.getenv('OPENAI_API_KEY', ''),
            'anthropic': '',
            'google': ''
        }

def update_progress():
    """Update game progress based on completed assessments"""
    completed = len(st.session_state.user_profile['completed_assessments'])
    st.session_state.game_progress = min(completed * 25, 100)

def reset_assessment():
    """Reset assessment data"""
    st.session_state.current_step = 'welcome'
    st.session_state.game_progress = 0
    st.session_state.user_profile = {
        'name': st.session_state.user_profile['name'],
        'riasec_scores': {
            'realistic': 0,
            'investigative': 0,
            'artistic': 0,
            'social': 0,
            'enterprising': 0,
            'conventional': 0
        },
        'skills_confidence': {},
        'work_values': [],
        'completed_assessments': []
    }
    st.session_state.riasec_responses = {}
    st.session_state.recommended_careers = []
    st.session_state.coaching_questions = []
    st.session_state.reflection_questions = []
