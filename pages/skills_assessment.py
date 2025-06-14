import streamlit as st
from data.questions import skills_list
from utils.session_state import update_progress

def render():
    st.title("💪 Skills Confidence Assessment")
    st.markdown("Rate your confidence level in each skill area")
    
    # Progress
    st.progress(0.5)
    st.caption("Step 2 of 3")
    
    # Skills rating
    st.subheader("How confident are you in these skills?")
    st.markdown("1 = Not confident at all | 5 = Very confident")
    
    # Create two columns for skills
    col1, col2 = st.columns(2)
    
    for i, skill in enumerate(skills_list):
        if i % 2 == 0:
            with col1:
                confidence = st.slider(
                    skill,
                    min_value=1,
                    max_value=5,
                    value=st.session_state.user_profile['skills_confidence'].get(skill, 3),
                    key=f"skill_{skill}"
                )
                st.session_state.user_profile['skills_confidence'][skill] = confidence
        else:
            with col2:
                confidence = st.slider(
                    skill,
                    min_value=1,
                    max_value=5,
                    value=st.session_state.user_profile['skills_confidence'].get(skill, 3),
                    key=f"skill_{skill}"
                )
                st.session_state.user_profile['skills_confidence'][skill] = confidence
    
    # Navigation
    st.divider()
    col1, col2 = st.columns(2)
    
    with col1:
        if st.button("← Back", use_container_width=True):
            st.session_state.current_step = 'riasec'
            st.rerun()
    
    with col2:
        if st.button("Next →", type="primary", use_container_width=True):
            st.session_state.user_profile['completed_assessments'].append('skills')
            update_progress()
            st.session_state.current_step = 'values'
            st.rerun()
