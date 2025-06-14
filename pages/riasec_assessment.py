import streamlit as st
from data.questions import riasec_questions
from utils.session_state import update_progress

def render():
    st.title("🔍 RIASEC Personality Assessment")
    st.markdown("Rate how much you agree with each statement on a scale of 1-5")
    
    # Progress bar
    progress = len(st.session_state.riasec_responses) / len(riasec_questions)
    st.progress(progress)
    st.caption(f"Question {len(st.session_state.riasec_responses) + 1} of {len(riasec_questions)}")
    
    # Group questions by type
    question_groups = {}
    for q in riasec_questions:
        if q['type'] not in question_groups:
            question_groups[q['type']] = []
        question_groups[q['type']].append(q)
    
    # Display questions by type
    for q_type, questions in question_groups.items():
        st.subheader(f"{q_type.capitalize()} Interests")
        
        for question in questions:
            col1, col2 = st.columns([3, 2])
            
            with col1:
                st.markdown(f"**{question['question']}**")
            
            with col2:
                response = st.radio(
                    "Rate:",
                    options=[1, 2, 3, 4, 5],
                    horizontal=True,
                    key=f"riasec_{question['id']}",
                    index=st.session_state.riasec_responses.get(question['id'], 3) - 1,
                    label_visibility="collapsed"
                )
                st.session_state.riasec_responses[question['id']] = response
    
    # Navigation
    st.divider()
    col1, col2 = st.columns(2)
    
    with col1:
        if st.button("← Back", use_container_width=True):
            st.session_state.current_step = 'welcome'
            st.rerun()
    
    with col2:
        if st.button("Next →", type="primary", use_container_width=True):
            # Calculate RIASEC scores
            calculate_riasec_scores()
            st.session_state.user_profile['completed_assessments'].append('riasec')
            update_progress()
            st.session_state.current_step = 'skills'
            st.rerun()

def calculate_riasec_scores():
    """Calculate RIASEC scores from responses"""
    type_scores = {
        'realistic': [],
        'investigative': [],
        'artistic': [],
        'social': [],
        'enterprising': [],
        'conventional': []
    }
    
    # Group responses by type
    for q in riasec_questions:
        if q['id'] in st.session_state.riasec_responses:
            score = st.session_state.riasec_responses[q['id']]
            type_scores[q['type']].append(score)
    
    # Calculate average scores
    for riasec_type, scores in type_scores.items():
        if scores:
            avg_score = sum(scores) / len(scores)
            # Convert to percentage (1-5 scale to 0-100)
            percentage = ((avg_score - 1) / 4) * 100
            st.session_state.user_profile['riasec_scores'][riasec_type] = round(percentage)
