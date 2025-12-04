import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login_modal.css";

type Props = {
    isOpen: boolean;
    onClose?: () => void;
    onSignup?: (payload: { role: "user" | "driver"; name: string; email: string; password: string; confirmPassword: string }) => void;
    onLogin?: () => void; // optional handler to switch to login
};

const SignupModal: React.FC<Props> = ({ isOpen, onClose, onSignup, onLogin }) => {
    const navigate = useNavigate();
    const [role, setRole] = useState<"user" | "driver">("user");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose && onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
            onClose && onClose();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const payload = { role, name, email, password, confirmPassword } as const;
        if (onSignup) onSignup(payload as any);
        else console.log("Signup submit", payload);
        onClose && onClose();
    };

    const goToLogin = () => {
        if (onLogin) onLogin();
        onClose && onClose();
        navigate("/login");
    };

    return (
        <div className="modal-overlay" onMouseDown={handleOverlayClick}>
            <div
                className="modal-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="signup-title"
                ref={panelRef}
            >
                <div className="modal-top">
                    <div id="signup-title" className="modal-title">
                        Sign up
                    </div>

                    <div className="role-toggle" role="tablist" aria-label="Role">
                        <div
                            className={`role-option ${role === "user" ? "active" : ""}`}
                            onClick={() => setRole("user")}
                            role="tab"
                            aria-selected={role === "user"}
                        >
                            User
                        </div>
                        <div
                            className={`role-option ${role === "driver" ? "active" : ""}`}
                            onClick={() => setRole("driver")}
                            role="tab"
                            aria-selected={role === "driver"}
                        >
                            Driver
                        </div>
                    </div>
                </div>

                <form className="modal-body" onSubmit={handleSubmit}>

                    <input
                        className="modal-input"
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        className="modal-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="modal-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        className="modal-input"
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button className="modal-button" type="submit">
                        Sign up
                    </button>

                    <div className="signup-link" onClick={goToLogin}>
                        Already have an account? Log in
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
