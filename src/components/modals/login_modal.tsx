import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login_modal.css";

type Props = {
    isOpen: boolean;
    onClose?: () => void;
    onLogin?: (payload: { role: "user" | "driver"; email: string; password: string }) => void;
    onSignup?: () => void;
};

const LoginModal: React.FC<Props> = ({ isOpen, onClose, onLogin, onSignup }) => {
    const navigate = useNavigate();
    const [role, setRole] = useState<"user" | "driver">("user");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        const payload = { role, email, password } as const;
        if (onLogin) onLogin(payload);
        else console.log("Login submit", payload);
        onClose && onClose();
    };

    const handleSignup = () => {
        if (onSignup) onSignup();
        onClose && onClose();
        navigate("/signup");
    };

    return (
        <div className="modal-overlay" onMouseDown={handleOverlayClick}>
            <div
                className="modal-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="login-title"
                ref={panelRef}
            >
                <div className="modal-top">
                    <div id="login-title" className="modal-title">
                        Login
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

                    <button className="modal-button" type="submit">
                        Login
                    </button>

                    <div className="signup-link" onClick={handleSignup}>
                        Don't have an account? Sign up
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
