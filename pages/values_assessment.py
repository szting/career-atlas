import streamlit as st
from data.questions import work_values
from utils.session_state import update_progress

def render():
    st.title("💎 Work Values Assessment")
    st.markdown("Select the values that are most important to you in your career")
    
    # Progress
    st.progress(0.75)
    st.caption("Step 3 of 3")
    
    # Values selection
    st.subheader("What matters most to you at work?")
    st.info("Select up to 5 values that are most important to you")
    
    # Create three columns for values
    col1, col2, col3 = st.columns(3)
    
    selected_values = st.session_state.user_profile['work_values']
    
    for i, value in enumerate(work_values):
        col = [col1, col2, col3][i % 3]
        
        with col:
            is_selected = value in selected_values
            
            if st.checkbox(value, value=is_selected, key=f"value_{value}"):
                if value not in selected_values and len(selected_values) < 5:
                    selected_values.append(value)
            else:
                if value in selected_values:
                    selected_values.remove(value)
    
    st.session_state.user_profile['work_values'] = selected_values
    
    # Show selected count
    if len(selected_values) > 5:
        st.error(f"Please select only up to 5 values. Currently selected: {len(selected_values)}")
    else:
        st.success(f"Selected: {len(selected_values)}/5 values")
    
    # Navigation
    st.divider()
    col1, col2 = st.columns(2)
    
    with col1:
        if st.button("← Back", use_container_width=True):
            st.session_state.current_step = 'skills'
            st.rerun()
    
    with col2:
        if st.button("Complete Assessment →", 
                    type="primary", 
                    use_container_width=True,
                    disabled=len(selected_values) == 0 or len(selected_values) > 5):
            st.session_state.user_profile['completed_assessments'].append('values')
            update_progress()
            
            # Calculate career matches
            from utils.career_matcher import calculate_career_matches
            st.session_state.recommended_careers = calculate_career_matches(st.session_state.user_profile)
            
            # Generate coaching questions
            from utils.openai_service import OpenAIService
            openai_service = OpenAIService()
            st.session_state.coaching_questions = openai_service.generate_coaching_questions(st.session_state.user_profile)
            st.session_state.reflection_questions = openai_service.generate_reflection_questions(st.session_state.user_profile)
            
            st.session_state.current_step = 'results'
            st.rerun()
